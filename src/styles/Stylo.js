import React from 'react'
import { StyleSheet } from 'react-native'

const Stylo = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      marginHorizontal: 10,
      //marginTop: 50,
      //alignItems: "center",
      //padding: 60
    },
    container2: {
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 10,
      marginTop: 50,
      //alignItems: "center",
      padding: 60
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    button: {
        backgroundColor: '#0000FF', // Ajusta este color al del botón en la imagen
        padding: 15,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
        top:30,
        marginTop: 20,
        margin: 20,
      },
    input: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
      },
      entrada: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        width: 200, 
      },
      botonAgregar: {
        backgroundColor: '#3361FF', 
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
      },
      botonGuardar: {
        backgroundColor: '#FFC107', 
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
      },
      botonEditar: {
        backgroundColor: '#2196F3',
        padding: 8,
        paddingHorizontal: 20,
      },
      botonBorrar: {
        backgroundColor: '#f44336', 
        padding: 8,
        paddingHorizontal: 20,
      },
      textoBoton: {
        color: 'white',
        fontWeight: 'bold',
      },
      itemAlumno: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
      },
      camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
      },
      text: {
        fontSize: 18,
        color: '#000',
      },
  });
  

export default Stylo

