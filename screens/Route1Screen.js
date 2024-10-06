import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const MovingTruckMap = () => {
  const origin = { latitude: 19.244139, longitude: -103.741629 }; // Central de los Rojos
  const destination = { latitude: 19.244139, longitude: -103.741629  }; // Bachillerato Uno
  const midpoint = {latitude: 19.250275, longitude: -103.702638 }; // Punto intermedio (puedes cambiarlo)

  const [currentPosition, setCurrentPosition] = useState(origin);
  const [routeCoords, setRouteCoords] = useState([]); // Almacena los puntos de la ruta
  const [routeIndex, setRouteIndex] = useState(0); // Índice para avanzar a lo largo de la ruta

  const GOOGLE_MAPS_APIKEY = 'AIzaSyDrTZ8GV_J-LxsiQF09rPWCi2-ruReB6Y0';

  // Función para mover el camión a lo largo de la ruta
  useEffect(() => {
    if (routeCoords.length > 0 && routeIndex < routeCoords.length) {
      const interval = setInterval(() => {
        setCurrentPosition(routeCoords[routeIndex]);
        setRouteIndex((prevIndex) => prevIndex + 1);

        // Detener la simulación cuando llegue al último punto de la ruta
        if (routeIndex >= routeCoords.length - 1) clearInterval(interval);
      }, 2000); // Actualiza la posición cada segundo

      return () => clearInterval(interval);
    }
  }, [routeCoords, routeIndex]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={currentPosition} title="Camión en movimiento" />
        <Marker coordinate={destination} title="Destino" />
        <Marker coordinate={midpoint} title="Punto Intermedio" />

        <MapViewDirections
          origin={origin}
          destination={destination}
          waypoints={[midpoint]} // Agrega el punto intermedio
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="blue"
          onReady={(result) => {
            const points = result.coordinates; // Puntos de la ruta generada
            setRouteCoords(points); // Guardar los puntos de la ruta
            setRouteIndex(0); // Reiniciar el índice de la ruta
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MovingTruckMap;