import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoutesScreen from './screens/RoutesScreen'; // Asegúrate de que la ruta sea correcta
import Route1Screen from './screens/Route1Screen'; // Asegúrate de que la ruta sea correcta
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen options={{headerShown:false}} name="Tabs" component={BottomTabNavigator} />
        <Stack.Screen options={{headerShown:false}} name="RoutesScreen" component={RoutesScreen} />
        <Stack.Screen options={{headerTitle:"Ruta 1"}} name="Route1Screen" component={Route1Screen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
