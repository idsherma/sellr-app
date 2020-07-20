import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";

//screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreens from './app/screens/ListingScreens';

//components
import AppButton from './app/components/AppButton';
import CardComponent from './app/components/CardComponent';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AppTextInput from './app/components/AppTextInput';

export default function App() {

  const [firstName, setFirstName] = useState('');

  return (
  //<WelcomeScreen/>
  //<ViewImageScreen/>
  //<ListingDetailScreen/>
  //<MessagesScreen/>
  //<AccountScreen />
  //<ListingScreens />

  <Screen>
    <AppTextInput placeholder="Username" icon="email"/>
  </Screen>
  );
}
