import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/components/Main/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import MapScreen from './src/components/Main/MapScreen';
import ProfileScreen from './src/components/Main/ProfileScreen';
import SignupScreen from './src/components/Signup/SignupScreen';
import MessagingScreen from './src/components/Main/MessagingScreen';
import ProfileEditScreen from './src/components/ProfileEditScreen';
import ListScreen from './src/components/Main/ListScreen';
import ProfileViewOthers from './src/components/ProfileViewOthers';
import RequestPaymentScreen from './src/components/Signup/RequestPaymentScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Message" component={MessagingScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ProfileViewOthers" component={ProfileViewOthers} />
        <Stack.Screen name="RequestPaymentScreen" component={RequestPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

