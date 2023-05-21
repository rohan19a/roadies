import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/Signup/SignupScreen';
import ProfileViewScreen from '../components/ProfileViewScreen';
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';
import RequestPaymentScreen from '../components/Signup/RequestPaymentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ProfileView" component={ProfileViewScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="RequestPaymentScreen" component={RequestPaymentScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
