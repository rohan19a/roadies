import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
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
    if (email === 'Test' && password === 'Test') {
      navigation.navigate('Home');
      return;
    } else if (email.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Invalid email or password');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

/*<TouchableOpacity style={styles.button} onPress={handleTest}>
<Text style={styles.buttonText}>Test</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('Profile')}
>
<Text style={styles.buttonText}>Test</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('List')}
>
<Text style={styles.buttonText}>Test</Text>
</TouchableOpacity> */


export default LoginScreen;
