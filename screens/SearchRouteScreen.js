import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const SearchRouteScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo de la parte superior */}
      <Image
        source={require('../assets/logo.png')} // Ruta de la imagen del logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título de la pantalla */}
      <Text style={styles.title}>Busca tu ruta</Text>

      {/* Input para origen */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Origen"
          style={styles.input}
        />
      </View>

      {/* Input para destino */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Destino"
          style={styles.input}
        />
      </View>

      {/* Botón de buscar */}
      <Button
        title="Buscar"
        onPress={() => alert('Funcionalidad de búsqueda aquí')}
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
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color : "#008000",
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingBottom: 5,
  },
  input: {
    fontSize: 16,
    width: '100%',
  },
});

export default SearchRouteScreen;
