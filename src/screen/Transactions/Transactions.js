import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import { TransactionItems } from '../../components/TransactionItems/TransactionItems';
import { FlatList } from 'react-native';

export const Transactions = ({navigation, route }) => {
  const { transactions } = route.params;
  console.log('navigation', navigation);
  const onPress = () => {
    navigation.navigate('TransactionDetail', { transaction: transactions[0] });
  }
  return (
    <View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItems transaction={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
