import React from "react";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { Button, View, Text } from 'tamagui';
type AnotherTestScreenProp = NavigationProp<
  RootStackParamList,
  'AnotherTest'
>;
type AnotherProp = {
  navigation: AnotherTestScreenProp;
};
const AnotherTest:React.FC<AnotherProp> = ({navigation})=>{
  return(
    <>
      <Text>ANOTHER TEST ON GOD!</Text>
    </>
  );
}

export default AnotherTest;