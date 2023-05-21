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
    <View style={request_payment_styles.container}>
      <Text style={request_payment_styles.title}>Request Payment</Text>
      <View style={request_payment_styles.inputContainer}>
        <Text style={request_payment_styles.label}>Card Number:</Text>
        <TextInput
          style={request_payment_styles.input}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          placeholder="Enter card number"
        />
      </View>
      <View style={request_payment_styles.inputContainer}>
        <Text style={request_payment_styles.label}>Expiration Date:</Text>
        <TextInput
          style={request_payment_styles.input}
          value={expirationDate}
          onChangeText={handleExpirationDateChange}
          placeholder="MM/YY"
        />
      </View>
      <View style={request_payment_styles.inputContainer}>
        <Text style={request_payment_styles.label}>CVV:</Text>
        <TextInput
          style={request_payment_styles.input}
          value={cvv}
          onChangeText={handleCVVChange}
          placeholder="Enter CVV"
        />
      </View>
      <TouchableOpacity style={request_payment_styles.button} onPress={handleSubmit}>
        <Text style={request_payment_styles.buttonText}>Submit Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestPaymentScreen;
