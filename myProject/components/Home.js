
import { Pressable, Text, View,StyleSheet, TextInput, Button, Image, ScrollView } from 'react-native';
import React from 'react';
import ItemHolder from './itemHolder';


const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    paddingBottom: 50,
  },
});

const testImages=[
  {
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    name: "Milk",
    image:require("../public/tejPic.jpg"),
    availableCount: 3,
    reservedCount: 1
  },
  {
    name: "Beans",
    image:require("../public/tejPic.jpg"),
    availableCount: 9,
    reservedCount: 4
  },
  {
    name: "Chips",
    image:require("../public/tejPic.jpg"),
    availableCount: 10,
    reservedCount: 0
  },
  {
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    name: "Milk",
    image:require("../public/tejPic.jpg"),
    availableCount: 3,
    reservedCount: 1
  },
  {
    name: "Beans",
    image:require("../public/tejPic.jpg"),
    availableCount: 9,
    reservedCount: 4
  },
  {
    name: "Chips",
    image:require("../public/tejPic.jpg"),
    availableCount: 10,
    reservedCount: 0
  },
  
]

export function HomeScreen({ navigation })
{
  
  const [text, setText] = React.useState('');
  function goToProfile()
  {
    navigation.navigate('Profile', {name: text});
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
      {testImages.map((item, index) => (
        <ItemHolder name={item.name} image={item.image} reservedCount={item.reservedCount} availableCount={item.availableCount} />
      ))}
      </View>
      
    </ScrollView>
  );
}



