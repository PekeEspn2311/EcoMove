import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoutesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutas</Text>
      <Text style={styles.region}>Región: Colima</Text>

      <Text style={styles.subtitle}>Listado de rutas:</Text>

      <TouchableOpacity
        style={styles.routeButton}
        onPress={() => navigation.navigate('Route1Screen')} // Asegúrate de que navegue a 'Route1Screen'
      >
        <Text style={styles.routeText}>Ruta 1</Text>
      </TouchableOpacity>

      {/* Agrega botones similares para otras rutas cuando estés listo */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#008000",
  },
  region: {
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  routeButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  routeText: {
    fontSize: 18,
    color: "#008000",
  },
});

export default RoutesScreen;
