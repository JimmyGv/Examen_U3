import * as FileSystem from "expo-file-system";
import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text, Alert } from "react-native";
import Stylo from '../styles/Stylo';

const Forms = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tasks, setTasks] = useState([]);
    const filePath = FileSystem.documentDirectory + "tasks.json";
  
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const info = await FileSystem.getInfoAsync(filePath);
          if (info.exists) {
            const storedTasks = await FileSystem.readAsStringAsync(filePath);
            setTasks(JSON.parse(storedTasks));
          }
        } catch (error) {
          console.error("Error al recuperar tareas", error);
        }
      };
      fetchTasks();
    }, []);
  
    const addTask = async () => {
      try {
        const newTask = { id: Date.now(), name, lastName, email, password };
        const updatedTasks = [...tasks, newTask];
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Error al agregar tarea", error);
      }
    };
  
    const deleteTask = async (id) => {
      try {
        const updatedTasks = tasks.filter((item) => item.id !== id);
        await FileSystem.writeAsStringAsync(filePath, JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      } catch (error) {
        console.error("Error al borrar tarea", error);
      }
    };
  
    const confirmDelete = (id) => {
      Alert.alert(
        "Confirmar",
        "¿Estás seguro de que quieres borrar esta tarea?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Borrar", onPress: () => deleteTask(id) },
        ],
        { cancelable: true }
      );
    };
  
    return (
      <View style={Stylo.container}>
        <TaskForm
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          addTask={addTask}
        />
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={Stylo.taskContainer}>
              <Text style={Stylo.taskText}>Nombre: {item.name}</Text>
              <Text style={Stylo.taskText}>Apellido: {item.lastName}</Text>
              <Text style={Stylo.taskText}>Correo: {item.email}</Text>
              <Text style={Stylo.taskText}>Contraseña: {item.password}</Text>
              <View style={Stylo.buttonContainer}>
                <Button title="Borrar" onPress={() => confirmDelete(item.id)} />
              </View>
            </View>
          )}
        />
      </View>
    );
  };
  
  const TaskForm = ({
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    addTask,
  }) => {
    return (
      <View style={Stylo.formContainer}>
        <TextInput style={Stylo.input} placeholder="Nombre" value={name} onChangeText={setName} />
        <TextInput
          style={Stylo.input}
          placeholder="Apellido"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput style={Stylo.input} placeholder="Correo" value={email} onChangeText={setEmail} />
        <TextInput
          style={Stylo.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Agregar" onPress={addTask} />
      </View>
    )
}


export default Forms
