import {NavigationContainer, useNavigationState} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './components/profile';
import React from 'react';
import { HomeScreen } from './components/Home';
import { ShoppingCart } from './components/shoppingCart';
import { enableScreens } from 'react-native-screens';


const Tab = createBottomTabNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Profile" component={Profile}/>
        <Tab.Screen name="ShoppingCart" component={ShoppingCart}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

