import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  // Datos de ejemplo del usuario
  const user = {
    name: 'Carlos Yahir Espinosa Espinosa',
    email: '20460680@colima.tecnm.mx',
    career: 'Ingeniería en Sistemas Computacionales',
    profilePicture: 'https://example.com/profile-pic.png' // Cambia esta URL por la imagen de perfil real
  };

  return (
    <View style={styles.container}>
      {/* Imagen de perfil */}
      <Image
        source={{ uri: user.profilePicture }}
        style={styles.profileImage}
      />

      {/* Nombre del usuario */}
      <Text style={styles.name}>{user.name}</Text>

      {/* Correo electrónico del usuario */}
      <Text style={styles.email}>{user.email}</Text>

      {/* Carrera del usuario */}
      <Text style={styles.career}>{user.career}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
    color:"#008000"
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#008000"
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
    color:"#008000"

  },
  career: {
    fontSize: 16,
    color: 'gray',
    color:"#008000"

  },
});

export default ProfileScreen;
