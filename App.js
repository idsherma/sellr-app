import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/components/navigation/navigationTheme";

import AuthNavigator from './app/components/navigation/AuthNavigator';
import AppNavigator from './app/components/navigation/AppNavigator';

//with authentication
//if user logged in, render AppNavigator
//if not, render AuthNavigator

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}
