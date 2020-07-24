//import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from "react-native";
import * as ImagePicker from 'expo-image-picker';

//screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreens from './app/screens/ListingScreens';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

//components
import AppButton from './app/components/AppButton';
import CardComponent from './app/components/CardComponent';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {

  const requestPermission = async () => {
    // const result = await ImagePicker.requestCameraRollPermissionsAsync

    // //granted = boolean
    // if(!result.granted) {
    //   alert('you need to enable permission to access the library');
    // }

    //destructuring granted 
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();

    if(!granted) {
      alert('You need to enable permission to access the library');
    }
  }

  //useEffect hook 
  //only want to ask permission only the first time the user uses the app
  useEffect(async () => {
    
    requestPermission();
    //implicitly returns a promise b/c we're using `async`
  }, [])

  return (
  //<WelcomeScreen/>
  //<ViewImageScreen/>
  //<ListingDetailScreen/>
  //<MessagesScreen/>
  //<AccountScreen />
  //<ListingScreens />
  //<LoginScreen />
  //<ListingEditScreen />

  //playing with ImagePicker
  //in class components, we have componentDidMount
  //useEffect hook in functional components 
  <Screen>
    
  </Screen>
  );
}
