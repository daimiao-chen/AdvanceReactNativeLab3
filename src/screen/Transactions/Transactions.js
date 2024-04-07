import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native';
import { TransactionItems } from '../../components/TransactionItems/TransactionItems';
import { FlatList } from 'react-native';
import { getTransactions } from '../../../firebase/firebase';

export const Transactions = ({navigation, route }) => {
  const [ transactions, setTransactions ] = React.useState([]);

  React.useEffect(() => {
    console.log(setTransactions);
    console.log(transactions);
    getTransactions(setTransactions);
  }, []);

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
