import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-backend-server.com/login', { email, password });
      const { token } = response.data;
      // TODO: store the JWT in local storage or a cookie
    } catch (error) {
      Alert.alert('Error', 'Invalid email or password');
    }
  };


  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={handleEmailChange} />
      <Text>Password:</Text>
      <TextInput secureTextEntry value={password} onChangeText={handlePasswordChange} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create Account" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default LoginScreen;