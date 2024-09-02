import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyDrawerScreen from './src/drawer/MyDrawerScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import InitialScreen from './src/screens/InitialScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Vehicles from './src/screens/Vehicles';
import VehicleDetails from './src/screens/VehicleDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator
     initialRouteName='InitialScreen'
     screenOptions={{
      headerShown:false
     }}>
       <Stack.Screen name="InitialScreen" component={InitialScreen} />
     <Stack.Screen name="MyDrawerScreen" component={MyDrawerScreen} />
     <Stack.Screen name="SearchScreen" component={SearchScreen} />
  <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  <Stack.Screen name="Vehicles" component={Vehicles} />
  <Stack.Screen name="VehicleDetails" component={VehicleDetails} />

</Stack.Navigator>



    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
