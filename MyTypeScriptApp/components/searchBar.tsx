import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';

type HeaderProps = {
  title: string;
  number?:number;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.flexBox}>
     
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 52
  },

  flexBox:{
    display:"flex",
    flexDirection:"row",
    columnGap:10
  }
});
export default Header;