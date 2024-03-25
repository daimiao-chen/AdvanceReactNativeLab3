import * as React from 'react';
import { Card } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';

export const TransactionItems = ({navigation, transaction }) => {
  const onPress = () => {
    navigation.navigate('TransactionDetail', { transaction });
  }
  return (
    <Card onPress={onPress} >
      <Card.Title title={transaction.name} right={props => <Text style={{paddingRight: 25}}>${transaction.amount}</Text>} />
    </Card>
  );
}
