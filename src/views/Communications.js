import React, { useState } from "react";
import { View, TextInput, Button, Linking } from "react-native";
import Communications from "react-native-communications";
import Stylo from "../styles/Stylo";

const CommunicationsView = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [phoneNumberSMS, setPhoneNumberSMS] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendSMS = () => {
    if(phoneNumber === "" || message === ""){
        console.error("You can't send a message like this")
    }
    else{
        Communications.text(phoneNumber, message);
    }
  };

  const handleSendEmail = () => {
    Communications.email([email], null, null, subject, emailBody);
  };

  const handleCall = () => {
    const formattedPhoneNumber = `tel:${phoneNumber}`;
    Linking.openURL(formattedPhoneNumber).catch((err) =>
      console.error("Error to try open the app the error is: " + err)
    );
};

  return (
    <View style={Stylo.container}>
    <TextInput
        style={Stylo.input}
        placeholder="Write the message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
    />
    <TextInput
        style={Stylo.input}
        placeholder="Phone Number"
        value={phoneNumberSMS}
        onChangeText={setPhoneNumberSMS}
        keyboardType="phone-pad"
    />
    <Button title="Open to send SMS" onPress={handleSendSMS} style={Stylo.button} />
    <TextInput
        style={Stylo.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
    />
    <TextInput
        style={Stylo.input}
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
    />
    <TextInput
        style={Stylo.input}
        placeholder="Write the mail"
        value={emailBody}
        onChangeText={setEmailBody}
        multiline
        numberOfLines={4}
    />
    <Button title="Open to Send Mail" onPress={handleSendEmail} style={Stylo.button} />
      
    <TextInput
        style={Stylo.input}
        placeholder="Número de teléfono"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
    />
    <Button title="Llamar" onPress={handleCall} style={Stylo.button} />
      
    </View>
  );
  };
  

export default CommunicationsView
