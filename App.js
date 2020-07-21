import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from "react-native";

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
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {

  //const [isNew, setIsNew] = useState(false);

  const [category, setCategory] = useState(categories[0]);

  return (
  //<WelcomeScreen/>
  //<ViewImageScreen/>
  //<ListingDetailScreen/>
  //<MessagesScreen/>
  //<AccountScreen />
  //<ListingScreens />

  <Screen>
    {/* <Switch 
      value={isNew} 
      onValueChange={newValue => setIsNew(newValue)}
    /> */}

    <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} 
      icon="apps" 
      placeholder="Category" 
    />
    <AppTextInput icon="email" placeholder="email"/>
  </Screen>
  );
}
