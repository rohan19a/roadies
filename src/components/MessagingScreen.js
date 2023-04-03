import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const MessagingScreen = ({ recipientId }) => {
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    try {
      const db = firebase.firestore();
      const messageRef = db.collection('messages').doc();
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      // Set the message data
      const data = {
        senderId: firebase.auth().currentUser.uid,
        recipientId,
        message,
        timestamp,
      };
      await messageRef.set(data);

      // Clear the message input
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('Error', 'Failed to send message');
    }
  };

  return (
    <View>
      <TextInput value={message} onChangeText={setMessage} placeholder="Type your message" />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

export default MessagingScreen;
