import React from 'react'
import { View, Text, Button } from "react-native";
import Stylo from '../styles/Stylo';
const Home = ({ navigation }) => {
    return (
      <View style={Stylo.container2}>
        <Text>Home Screen</Text>
        <Button style={Stylo.button} title="Camera" onPress={() => navigation.navigate("Camera")} />
        <Button style={Stylo.button} title="View Communications" onPress={() => navigation.navigate("Communications")}/>
        <Button style={Stylo.button} title="Location" onPress={() => navigation.navigate("Location")} />
        <Button style={Stylo.button} title="Storage" onPress={() => navigation.navigate("Forms")} />
      </View>
    );
  }

export default Home
