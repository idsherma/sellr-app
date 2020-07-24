//import React, { useState } from 'react';
import React, {
  useEffect,
  useState
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  Image
} from "react-native";
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
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {

  return (
    //<WelcomeScreen/>
    //<ViewImageScreen/>
    //<ListingDetailScreen/>
    //<MessagesScreen/>
    //<AccountScreen />
    //<ListingScreens />
    //<LoginScreen />
    <ListingEditScreen />

    // <Screen>
    //   <ImageInputList 
    //   imageUris = {imageUris}
    //   onAddImage = {uri => handleAdd(uri)}
    //   onRemoveImage={uri => handleRemove(uri)}
    // /> 
    // </Screen>
  );
}