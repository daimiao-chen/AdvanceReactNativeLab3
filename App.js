import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Transactions } from './src/screen/Transactions/Transactions';
import { Summary } from './src/screen/Summary/Summary';
import { TransactionDetail } from './src/screen/TransactionDetail/TransactionDetail';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AddTransactionButton, AddTransaction } from './src/screen/AddTransaction';
import { useNavigation } from '@react-navigation/native';

/* 10 items of test data */
const init_testData = [
  { name: 'Shopping', amount: 100, address: '123 Main St', date: '2021-01-01' },
  { name: 'Eating Out', amount: 15, address: '456 Elm St', date: '2021-01-02' },
  { name: 'Groceries', amount: 50, address: '789 Oak St', date: '2021-01-03' },
  { name: 'Gas', amount: 40, address: '321 Pine St', date: '2021-01-04' },
  { name: 'Shopping', amount: 100, address: '123 Main St', date: '2021-01-05' },
  { name: 'Eating Out', amount: 15, address: '456 Elm St', date: '2021-01-06' },
  { name: 'Groceries', amount: 50, address: '789 Oak St', date: '2021-01-07' },
  { name: 'Gas', amount: 40, address: '321 Pine St', date: '2021-01-08' },
  { name: 'Shopping', amount: 100, address: '123 Main St', date: '2021-01-09' },
  { name: 'Eating Out', amount: 15, address: '456 Elm St', date: '2021-01-10' },
];


const StackNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const Tabs = () => {
  const [testData, setTestData] = React.useState(init_testData);
  const navigation = useNavigation();

  const addTransaction = (transaction) => {
    console.log('addTransaction', transaction);
    setTestData([...testData, transaction]);
  }

  React.useEffect(() => {
    console.log('testData', testData);
  }, [testData]);

  const headerRightButton = () => (
    <Button title="Add" onPress={() => {
      navigation.navigate('AddTransaction', { addTransaction });
    }} />
  );

  const TransactionsIcon = ({ color, size }) => (
    <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
  );
  const SummaryIcon = ({ color, size }) => (
    <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
  );
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Transactions" component={Transactions} initialParams={{ transactions: testData }} options={{ tabBarIcon: TransactionsIcon,
        headerRight:headerRightButton,
      }} />
      <TabNavigator.Screen name="Summary" component={Summary} initialParams={{ transactions: testData }} options={{ tabBarIcon: SummaryIcon}} />
    </TabNavigator.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />
        <StackNavigator.Screen name="TransactionDetail" component={TransactionDetail} />
        <StackNavigator.Screen name="AddTransaction" component={AddTransaction} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
