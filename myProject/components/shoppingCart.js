import { Pressable, Text, View,StyleSheet } from 'react-native';
import React from 'react';

export function ShoppingCart({navigation})
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <Text>Insert Shopping Cart content here</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}><Text>Hello</Text></Pressable>
    </View>
  );
}

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