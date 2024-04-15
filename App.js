import React from 'react';
import{ Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";


//asi se importaria una imagen si estuviera guardada en la carpeta assets y la llamo en source entre llaves con el nombre de la variable
//import image from './assets/mia.jpg';
const App = () => {
  let openImagePickerAsync = async () => {
   let permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false){
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
  <View style={styles.container}>
    <Text style={styles.title}> Hello World </Text>
    <Image
      //source={image}
    source={{ uri: "https://picsum.photos/200/200"}}
    style={styles.img}
    />
    <TouchableOpacity
      onPress={openImagePickerAsync}
      style={styles.button}
    >

      <Text style={styles.buttonText}>Click me</Text>
    </TouchableOpacity>



  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex:1 ,
    justifyContent: "center" ,
    alignItems: "center",
    backgroundColor: "#edd2eb"
  },
  title: { fontSize: 30 } ,
    img: { width: 200, height: 200, borderRadius: 100},
    button: {
      backgroundColor: "#b854b2",
      padding: 8,
      borderRadius: 5,
      marginTop: 10},
    buttonText: {
    color: "#fff",
    fontSize: 20
  }
});
export default App;
