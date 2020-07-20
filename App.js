import React from 'react';
import { StyleSheet, Text, View } from "react-native";

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

export default function App() {
  return (
  <WelcomeScreen/>
  //<ViewImageScreen/>
  //<ListingDetailScreen/>
  //<MessagesScreen/>
  //<AccountScreen />
  //<ListingScreens />
  );
}
