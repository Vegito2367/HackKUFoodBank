import React from 'react';
import { View, Text, StyleSheet, Pressable, Button, Image, TextInput } from 'react-native';
import supabase from './supabaseClient';

function Profile({navigation, route})
{
  const name = route.params?.name || "Tej";
  function goHome(){

    navigation.navigate('Main Menu');
  }
  return (
    <View style={styles.container}>
      <View style={{display:"flex", alignContent:"center", borderWidth:2, padding:20, paddingBottom:75}}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput numberOfLines={1} placeholder="Username" style={{borderWidth: 1, height: 40, marginBottom: 20}}/>
      <TextInput numberOfLines={1} placeholder="Password" style={{borderWidth: 1, height: 40, marginBottom: 50}}/>
      <Pressable style={styles.button} onPress={goHome}><Text style={{fontSize:20, textAlign:"center"}} >Log in</Text></Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 70,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#f000ff",
    padding: 20,
    borderRadius: 5,
    
  },
});
