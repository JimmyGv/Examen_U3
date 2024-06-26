import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Stylo from '../styles/Stylo';
// Componente que muestra la vista de la cámara

const CameraView = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };
  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso denegado para acceder a la galería.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      // Usamos el primer elemento de assets ya que solo se selecciona una imagen
      setCapturedImage(result.assets[0].uri);
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No se ha concedido acceso a la cámara</Text>;
  }
  return (
    <View style={Stylo.container}>
      <Camera style={Stylo.camera} type={type} ref={cameraRef}>
        <View style={Stylo.buttonContainer}>
          <TouchableOpacity style={Stylo.button} onPress={takePicture}>
            <Text style={Stylo.text}>Tomar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Stylo.button} onPress={() => setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          )}>
            <Text style={Stylo.text}>Cambiar cámara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Stylo.button} onPress={pickImageFromGallery}>
            <Text style={Stylo.text}>Seleccionar de la galería</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedImage && <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />}
    </View>
  );
  }

export default CameraView
