import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import MapScreen from './src/components/MapScreen';
import ProfileScreen from './src/components/ProfileScreen';
import SignupScreen from './src/components/SignupScreen';
import MessagingScreen from './src/components/MessagingScreen';
import ProfileEditScreen from './src/components/ProfileEditScreen';
import ListScreen from './src/components/ListScreen';
import ProfileViewOthers from './src/components/ProfileViewOthers';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

