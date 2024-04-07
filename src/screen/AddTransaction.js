import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addTransaction } from '../../firebase/firebase';
import DataTimePicker from '@react-native-community/datetimepicker';

export const AddTransaction = () => {
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  const handleAddTransaction = () => {
    // add transaction into firebase.transactions
    const transaction = {
      name,
      amount,
      address,
      date: date.toISOString(),
    };
    addTransaction(transaction);

    setName('');
    setAmount('');
    setAddress('');
    setDate(new Date());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <DataTimePicker
        value={date}
        mode="date"
        onChange={(event, selectedDate) => setDate(selectedDate)}
      />
      <Button
        title="Add Transaction"
        onPress={handleAddTransaction}
      />
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
});

export const AddTransactionButton = ({ navigation, route }) => {
  const { addTransaction } = route.params;
  return (
    <Button
      title="Add"
      onPress={() => navigation.navigate('AddTransaction', { addTransaction: addTransaction })}
    />
  );
}

