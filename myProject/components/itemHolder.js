import { Pressable, Text, View,StyleSheet, TextInput, Button, Image, Modal } from 'react-native';
import { useState } from 'react';
export default function ItemHolder(route)
{
  const [pressed, setPressed] = useState(false);
  
  return(
    <Pressable onPress={() => {route.onClickFunction(route)}} style={({ pressed }) => [
    {opacity: pressed ? 0.8 : 1},
    {backgroundColor: pressed ? '#f0f0f0' : '#fff'},
    {borderRadius: pressed? 15 : 5}
    ,imagestyles.container]}>
      <Text>{pressed}</Text>
      <Image style={imagestyles.image} source={route.image}/>
      <Text>{route.name}</Text>
      <Text>{route.availableCount}</Text>
      <Text>{route.reservedCount}</Text>
    </Pressable>
  );
}

const imagestyles = StyleSheet.create({
  image:{
    width:100,
    height:100,
    padding:0,
    margin:0,
  },
  container: {
    flexGrow:0,
    flexShrink:0,
    flexBasis: '33%',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transition: "2s",
  },

});