
import { Pressable, Text, View,StyleSheet, TextInput, Button, Image } from 'react-native';
import React, { useRef } from 'react';
import ItemHolder from './itemHolder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const testImages=[
  {
    name: "Apple",
    image:"../public/tejPic.jpg",
    availableCount: 5,
    reservedCount: 2
  },
  {
    name: "Milk",
    image:"../public/tejPic.jpg",
    availableCount: 3,
    reservedCount: 1
  },
  {
    name: "Beans",
    image:"../public/tejPic.jpg",
    availableCount: 9,
    reservedCount: 4
  },
  {
    name: "Chips",
    image:"../public/tejPic.jpg",
    availableCount: 10,
    reservedCount: 0
  }

]

export function HomeScreen({ navigation })
{
  
  const [text, setText] = React.useState('');
  function goToProfile()
  {
    navigation.navigate('Profile', {name: text});
  }
  return (
    <View style={styles.container}>
      {testImages.map((item, index) => (
        <ItemHolder name={item.name} image={item.image} reservedCount={item.reservedCount} availableCount={item.availableCount} />
      ))}
      <Pressable onPress={goToProfile}><Text>Submit</Text></Pressable>
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, margin: 10}}
      editable={true}
      numberOfLines={1}
      onChangeText={text => setText(text)}
      />
    </View>
  );
}



