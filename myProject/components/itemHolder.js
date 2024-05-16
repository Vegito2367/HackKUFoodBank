import { Pressable, Text, View,StyleSheet, TextInput, Button, Image } from 'react-native';
export default function ItemHolder({name, image, availableCount, reservedCount})
{
  return(
    <View style={imagestyles.container}>
      <Image style={imagestyles.image} source={{uri: route.params.image}}/>
      <Text>{route.params.name}</Text>
      <Text>{route.params.availableCount}</Text>
      <Text>{route.params.reservedCount}</Text>
    </View>
  );
}

const imagestyles = StyleSheet.create({
  image:{
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});