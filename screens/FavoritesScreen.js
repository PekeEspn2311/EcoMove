import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de tener esta librería instalada
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      
      {/* Item de la Ruta 1 */}
      <View style={styles.favoriteItem}>
        <Text style={styles.routeName}>Ruta 1</Text>
        <TouchableOpacity>
          <Ionicons name="heart" color="#008000" size={30} />
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 10,
  },
  routeName: {
    fontSize: 18,
  },
});

export default FavoritesScreen;
