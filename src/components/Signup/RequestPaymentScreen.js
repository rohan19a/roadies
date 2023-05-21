import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styleSheets/styles';
styles;

const RequestPaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (text) => {
    setCardNumber(text);
  };

  const handleExpirationDateChange = (text) => {
    setExpirationDate(text);
  };

  const handleCVVChange = (text) => {
    setCVV(text);
  };

  const handleSubmit = () => {
    // TODO: Perform payment processing logic
    console.log('Payment submitted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Payment</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card Number:</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          placeholder="Enter card number"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expiration Date:</Text>
        <TextInput
          style={styles.input}
          value={expirationDate}
          onChangeText={handleExpirationDateChange}
          placeholder="MM/YY"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CVV:</Text>
        <TextInput
          style={styles.input}
          value={cvv}
          onChangeText={handleCVVChange}
          placeholder="Enter CVV"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestPaymentScreen;
