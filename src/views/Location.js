import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Stylo from "../styles/Stylo"

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const fetchUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMessage("El acceso a la ubicación fue denegado");
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    } catch (error) {
      setErrorMessage("No se pudo obtener la ubicación del usuario");
    }
  };

  return (
    <View style={Stylo.container}>
      {userLocation ? (
        <MapView
          style={Stylo.map}
          initialRegion={{
            latitude: userLocation.coords.latitude,
            longitude: userLocation.coords.longitude,
            latitudeDelta: 0.0598,
            longitudeDelta: 0.0609,
          }}>
          <Marker
            coordinate={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            title="Mi Ubicación"
            description="Estoy aquí"
          />
        </MapView>
      ) : (
        <Text>{errorMessage ? errorMessage : "Cargando..."}</Text>
      )}
    </View>
  );
}

export default LocationComponent;
