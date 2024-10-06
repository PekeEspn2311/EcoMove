import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo de la parte superior */}
      <Image
        source={require('../assets/logo.png')} // Ruta de la imagen
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Título de bienvenida */}
      <Text style={styles.title}>Bienvenido a <Text style={styles.highlight}>EcoMove</Text></Text>
      
      {/* Texto descriptivo */}
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Aquí podrás conocer el trayecto real de tus rutas, información general de la unidad en la que te transportas y conocer que ruta tomar según tu destino.
        </Text>
      </View>
      
      {/* Botón para ver rutas */}
      <Button
        title="Ver rutas"
        onPress={() => navigation.navigate('Routes')}
        color="#008000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#008000', // Color verde
  },
  textContainer: {
    backgroundColor: '#008000', // Color de fondo similar al de la imagen
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  }, 
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default HomeScreen;
