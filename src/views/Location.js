import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Stylo from "../styles/Stylo";

const LocationComponent = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      getLocation();
    }, []);
  
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Se denegó el permiso para acceder a la ubicación");
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
  
    return (
      <View style={Stylo.container}>
        {location ? (
          <MapView
            style={Stylo.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Mi Ubicación"
              description="Estoy aquí"
            />
          </MapView>
        ) : (
          <Text>Cargando...</Text>
        )}
      </View>
    );
}

export default LocationComponent