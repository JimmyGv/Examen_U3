import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import Stylo from "../styles/Stylo";

const Forms = () => {
  const [nombreInput, setNombreInput] = useState('');
  const [apellidoInput, setApellidoInput] = useState('');
  const [edadInput, setEdadInput] = useState('');
  const [cursoInput, setCursoInput] = useState('');
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoAEditarIndex, setAlumnoAEditarIndex] = useState(null);

  const agregarOEditarAlumno = () => {
    if (alumnoAEditarIndex !== null) {
      const nuevosAlumnos = [...alumnos];
      nuevosAlumnos[alumnoAEditarIndex] = { nombre: nombreInput, apellido: apellidoInput, edad: edadInput, curso: cursoInput };
      setAlumnos(nuevosAlumnos);
      setAlumnoAEditarIndex(null);
    } else {
      setAlumnos([...alumnos, { nombre: nombreInput, apellido: apellidoInput, edad: edadInput, curso: cursoInput }]);
    }
    setNombreInput('');
    setApellidoInput('');
    setEdadInput('');
    setCursoInput('');
  };

  const iniciarEdicion = (index) => {
    setAlumnoAEditarIndex(index);
    const alumno = alumnos[index];
    setNombreInput(alumno.nombre);
    setApellidoInput(alumno.apellido);
    setEdadInput(alumno.edad);
    setCursoInput(alumno.curso);
  };

  const borrarAlumno = (index) => {
    const nuevosAlumnos = [...alumnos];
    nuevosAlumnos.splice(index, 1);
    setAlumnos(nuevosAlumnos);
  };

  return (
    <View style={Stylo.container2}>
      <TextInput
        placeholder="Nombre"
        value={nombreInput}
        onChangeText={setNombreInput}
        style={Stylo.entrada}
      />
      <TextInput
        placeholder="Apellido"
        value={apellidoInput}
        onChangeText={setApellidoInput}
        style={Stylo.entrada}
      />
      <TextInput
        placeholder="Edad"
        value={edadInput}
        onChangeText={setEdadInput}
        style={Stylo.entrada}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Curso"
        value={cursoInput}
        onChangeText={setCursoInput}
        style={Stylo.entrada}
      />
      <TouchableOpacity
        style={alumnoAEditarIndex !== null ? Stylo.botonGuardar : Stylo.botonAgregar}
        onPress={agregarOEditarAlumno}
      >
        <Text style={Stylo.textoBoton}>{alumnoAEditarIndex !== null ? 'Guardar Edición' : 'Agregar'}</Text>
      </TouchableOpacity>

      <FlatList
        data={alumnos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={Stylo.itemAlumno}>
            <Text>{`${item.nombre} ${item.apellido}`}</Text>
            <TouchableOpacity style={Stylo.botonEditar} onPress={() => iniciarEdicion(index)}>
              <Text style={Stylo.textoBoton}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Stylo.botonBorrar} onPress={() => borrarAlumno(index)}>
              <Text style={Stylo.textoBoton}>Borrar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}



export default Forms
