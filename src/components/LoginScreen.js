import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleTest = () => {
    navigation.navigate('Maps');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const { token } = response.data;
      Alert.alert('Success', 'You are logged in');
    } catch (error) {1` `
      Alert.alert('Error', 'Invalid email or password');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={handleEmailChange} />
      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={handlePasswordChange} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Create Account" onPress={() => navigation.navigate('Signup')} />
      <Button title="Test" onPress={handleTest} />
      <Button title="Test" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default LoginScreen;
