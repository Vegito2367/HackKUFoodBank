
import { Pressable, Text, View,StyleSheet, TextInput, Button } from 'react-native';
import React, { useRef } from 'react';
import {NavigationContainer, useNavigationState} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function HomeScreen({ navigation })
{
  const [text, setText] = React.useState('');
  function goToProfile()
  {
    
    navigation.navigate('Profile', {name: text});
  }
  return (
    <View style={styles.container}>
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



