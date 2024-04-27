import {StyleSheet} from 'react'

const Stylo = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
      },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonsHome: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: "100%",
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
    },
      taskContainer: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        padding: 10,
    },
    taskText: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    //Camera 
    camera: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonCamera: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: "center",
        margin: 20,
    },
    text: {
        fontSize: 18,
        color: "#000",
    },
    //Communications
    smsContainer: {
        marginBottom: 20,
    },
    emailContainer: {
        marginBottom: 20,
    },
    callContainer: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
    },
  });

export default Stylo
