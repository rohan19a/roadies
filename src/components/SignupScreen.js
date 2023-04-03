import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from './styles';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignup = () => {
    const handleSignup = async () => {
        try {
          const response = await axios.post('http://localhost:3000/signup', { name, email, password });
          const { token } = response.data;
          // TODO: store the JWT in local storage or a cookie
        } catch (error) {
          Alert.alert('Error', 'Invalid email or password');
        }
      };  
    };

    return (
        <View style={styles.container}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} value={email} onChangeText={handleEmailChange} />
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} secureTextEntry value={password} onChangeText={handlePasswordChange} />
          <Button title="Create Account" onPress={handleSignup} />
          <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
        </View>
      );
    };

export default SignupScreen;
