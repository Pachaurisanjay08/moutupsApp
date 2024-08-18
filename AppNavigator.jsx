// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Info from './Components/Profile/Info';
import HomeScreen from './Components/HomePage/Home'; // Assuming you have a HomeScreen
import Spage from './Components/MyApplies/Spage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Earning" component={Spage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
