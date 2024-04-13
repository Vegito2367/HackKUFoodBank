import React from 'react';
import { Button, View, Text } from 'tamagui';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { StyleSheet } from 'react-native';
type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <>
      <Text>No</Text>
      <View style={styles.container}>
          <Button style={styles.classicButton} onPress={() => navigation.navigate("Test")}>Goes to Test</Button>
          <Button style={styles.classicButton} onPress={() => navigation.navigate("AnotherTest")}>Goes to Another test</Button>
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  classicButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    width:"50%"
  },
  container: {
    display:"flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;