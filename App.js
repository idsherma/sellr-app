//import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

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
  const [imageUri, setimageUri] = useState();
  const requestPermission = async () => {

    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);



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

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      
      //if user doesnt cancel
      if(!result.cancelled) {
        setimageUri(result.uri);
      }

    } catch (error) {
      console.log('error reading an image', error);
    }
  }

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
    <Button title="Select Image" onPress={selectImage} />
    <Image
      source={{uri: imageUri}}
      style={{width: 200, height: 200}}
    />
  </Screen>
  );
}
