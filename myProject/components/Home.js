
import { Pressable, Text, View,StyleSheet, TextInput, Button, Image, ScrollView, Modal } from 'react-native';
import React from 'react';
import { useState } from 'react';
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
  centeredView: {
    flex: 1,
    marginTop: "30%",

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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

  const [modalVisibility, setModalVisibility] = useState(false);
  const [data, setData] = useState(null);
  function handlePress(param){
    setData(param);
    setModalVisibility(true);
  }

  function closeModal(){
    setModalVisibility(false);
  }
  function goToProfile()
  {
    navigation.navigate('Profile', {name: text});
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal visible={modalVisibility} animationType="slide" transparent={true}>
        <View style={{width:"100%", height:"100%", backgroundColor:"rgba(99, 111, 130,0.7)"
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>How many do you want to reserve?</Text>
              <Image style={{width:100, height:100}} source={data?.image}/>
              <Text>{data?.name}</Text>
              <Text>{data?.availableCount}</Text>
              <Text>{data?.reservedCount}</Text>
              <View style={{display:"flex", flexDirection:"row", alignContent:"center", }}>
              <Button title="+" style={{backgroundColor:"rgba(99, 111, 130,1)"}}></Button>
              <View style={{backgroundColor:"rgba(99, 111, 130,1)", padding:10, marginLeft:20, marginRight:20}}><Text adjustsFontSizeToFit={true} style={{fontSize:23}}>1</Text></View>
              <Button title="-" style={{backgroundColor:"rgba(99, 111, 130,1)"}}></Button>
              </View>
              <Button title="Close" onPress={closeModal}/>
            </View>  
          </View>
        </View>
      </Modal>
      <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
      {testImages.map((item, index) => (
        <ItemHolder name={item.name} image={item.image} reservedCount={item.reservedCount} availableCount={item.availableCount} onClickFunction={handlePress} key={index} />
      ))}
      </View>

      
    </ScrollView>
  );
}



