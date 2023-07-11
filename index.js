import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import validatePhoneNumber from './validatePhoneNumber'; 

const PhoneApp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleValidation = () => {
    const result = validatePhoneNumber(phoneNumber);
    setValidationResult(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Lütfen Telefon Numarası Girin:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Gönder" onPress={handleValidation} />
      <Text style={styles.validationResult}>{validationResult}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  validationResult: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneApp;
