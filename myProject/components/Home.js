
import { Pressable, Text, View,StyleSheet, TextInput, Button, Image, ScrollView, Modal } from 'react-native';
import React, { useEffect } from 'react';
import ItemHolder from './itemHolder';
import { useState } from 'react';
import supabase from './supabaseClient';


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
    id: 1,
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    id: 2,
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    id: 3,
    name: "Milk",
    image:require("../public/tejPic.jpg"),
    availableCount: 3,
    reservedCount: 1
  },
  {
    id: 4,
    name: "Beans",
    image:require("../public/tejPic.jpg"),
    availableCount: 9,
    reservedCount: 4
  },
  {
    id: 5,
    name: "Chips",
    image:require("../public/tejPic.jpg"),
    availableCount: 10,
    reservedCount: 0
  },
  {
    id: 6,
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    id: 7,
    name: "Apple",
    image:require("../public/tejPic.jpg"),
    availableCount: 5,
    reservedCount: 2
  },
  {
    id: 8,
    name: "Milk",
    image:require("../public/tejPic.jpg"),
    availableCount: 3,
    reservedCount: 1
  },
  {
    id: 9,
    name: "Beans",
    image:require("../public/tejPic.jpg"),
    availableCount: 9,
    reservedCount: 4
  },
  {
    id: 10,
    name: "Chips",
    image:require("../public/tejPic.jpg"),
    availableCount: 10,
    reservedCount: 0
  },
  
]

export function HomeScreen({ navigation })
{

  const [error,setError] = useState(null);
  const [food,setFood] = useState(null);
  const [text, setText] = React.useState('');

  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    async function fetchData(){
      const {data, error} = await supabase
      .from('FoodItems')
      .select()

      if(error){
        console.log("Error Found")
        setError('Error fetching data');
        console.log(error)
        setFood(null)

      }
      if(data){
        console.log("Data Found")
        setFood(data);
        console.log(data);
        setError(null);
      }
    }

    fetchData();
  }, [])


  function handlePress(param){
    console.log(param)
    setModalData(param);
    setModalVisibility(true);
  }

  function closeModal(){
    setModalVisibility(false);
  }
  function goToProfile()
  {
    navigation.navigate('Profile', {name: text});
  }

  function AddNumber(){
    setUserCount(userCount+1);
  }
  function SubtractNumber(){
    if(userCount>0){
      setUserCount(userCount-1);
    }
  }

  function handleModalClose(){
    
    if(userCount>modalData.availableCount){
      alert("You cannot reserve more than available");
      return;
    }
    else if(userCount>0){
      alert("You have reserved " + userCount + " " + modalData.name);
      testImages[modalData.id-1].availableCount-=userCount;
      setModalData(null);
      setUserCount(0);
    }
    closeModal();
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Modal visible={modalVisibility} animationType="slide" transparent={true}>
        <View style={{width:"100%", height:"100%", backgroundColor:"rgba(99, 111, 130,0.7)"
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>How many do you want to reserve?</Text>
              <Image style={{width:100, height:100}} source={modalData?.image}/>
              <Text>{modalData?.name}</Text>
              <Text>{modalData?.availableCount}</Text>
              <Text>{modalData?.reservedCount}</Text>
              <View style={{display:"flex", flexDirection:"row", alignContent:"center", }}>
              <Button title="+" onPress={AddNumber} style={{backgroundColor:"rgba(99, 111, 130,1)"}}></Button>
              <View style={{backgroundColor:"rgba(99, 111, 130,1)", padding:7.5, marginLeft:20, marginRight:20}}><Text adjustsFontSizeToFit={true} style={{fontSize:23}}>{userCount}</Text></View>
              <Button title="-" onPress={SubtractNumber} style={{backgroundColor:"rgba(99, 111, 130,1)"}}></Button>
              </View>
              <Button title="Done" onPress={handleModalClose}/>
              <Button title='Close' onPress={closeModal} color='red'>Close</Button>
            </View>  
          </View>
        </View>
      </Modal>
      <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
      {testImages.map((item, index) => (
        <ItemHolder name={item.name} image={item.image} reservedCount={item.reservedCount} availableCount={item.availableCount} onClickFunction={handlePress} key={index} id={item.id} />
      ))}
      </View> */}

      {food && (
        <View>
          {food.map((item, index) => (
            <p>{item.name} {item.availableCount}</p>
          ))}
        </View>
      )}

      {error && (<p>{error}</p>)}


    </ScrollView>
  );
}



