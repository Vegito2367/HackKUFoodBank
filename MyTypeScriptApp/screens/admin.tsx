import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Header from '../components/header';
type AdminScreenProp = NavigationProp<
  RootStackParamList,
  'Admin'
>;
type AdminProp = {
  navigation: AdminScreenProp;
};
const Admin: React.FC<AdminProp> = ({navigation}) => {
  return (
    <View>
      <Header title="Suck my dick" number={59} />
      <Text>Welcome to the Admin page!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Admin;