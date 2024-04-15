import React from 'react';
import{ Text, View, StyleSheet, Image } from 'react-native';
//asi se importaria una imagen si estuviera guardada en la carpeta assets y la llamo en source entre llaves con el nombre de la variable
//import image from './assets/mia.jpg';
const App = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}> Hello World </Text>
    <Image
      //source={image}
    source={{ uri: "https://picsum.photos/200/200"}}
    style={styles.img}
    />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex:1 ,
    justifyContent: "center" ,
    alignItems: "center",
    backgroundColor: "#87ccea"
  },
  title: { fontSize: 30 } ,
    img: { width: 200, height: 200, borderRadius: 100}
});
export default App;