import * as React from 'react';
import { Text, View } from 'react-native';

export const Summary = ({ route }) => {
  const { transactions } = route.params;
  const [hightestSpending, setHightestSpending] = React.useState(0);
  const [lowestSpending, setLowestSpending] = React.useState(0);
  React.useEffect(() => {
    let tempHight = transactions[0];
    let tempLow = transactions[0];
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > tempHight.amount) {
        tempHight = transactions[i];
      }
      if (transactions[i].amount < tempLow.amount) {
        tempLow = transactions[i];
      }
    }
    setHightestSpending(tempHight);
    setLowestSpending(tempLow);

  }, [route]);


  return (
    <View>
      <View style={styles.row}>
        <Text> Transactions: </Text>
        <Text> {transactions.length} </Text>
      </View>
      <View style={{borderWidth: 0.5, borderColor:'black', margin:10,}} />
      <View style={styles.row}>
        <Text> Balance: </Text>
        <Text> ${transactions.reduce((acc, transaction) => acc + transaction.amount, 0)} </Text>
      </View>
      <View style={{borderWidth: 0.5, borderColor:'black', margin:10,}} />
      <View>
        <Text> High Spending: </Text>
        <View style={styles.row}>
          <Text> {hightestSpending.name} </Text>
          <Text> ${hightestSpending.amount} </Text>
        </View>
      </View>
      <View style={{borderWidth: 0.5, borderColor:'black', margin:10,}} />
      <View>
        <Text> Low Spending: </Text>
        <View style={styles.row}>
          <Text> {lowestSpending.name} </Text>
          <Text> ${lowestSpending.amount} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
};
