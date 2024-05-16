import React from 'react';
import { View, Text, StyleSheet, Pressable, Button } from 'react-native';

function Profile({navigation, route})
{
  const name = route.params?.name || "Tej";
  function goHome(){
    console.log("Go Home");
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Insert Profile content {name}</Text>
      <Pressable onPress={() => navigation.navigate('ShoppingCart')}><Text>Hello</Text></Pressable>
      <Button title="Go to Home" onPress={goHome}/>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
