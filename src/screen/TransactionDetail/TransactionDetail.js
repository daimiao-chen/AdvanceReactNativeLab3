import * as React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View>
      <View style={styles.title}>
        <Text> ${transaction.amount} </Text>
        <Text> {transaction.name} </Text>
        <Text> {transaction.address} </Text>
      </View>
      <View style={styles.date}>
        <Text> Transaction Date: </Text>
        <Text> {transaction.date} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
  },
  date: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'lightgreen',
  },
});
