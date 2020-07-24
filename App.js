import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import navigationTheme from "./app/navigation/navigationTheme";
//import AppNavigator from "./app/navigation/AppNavigator";

import AuthNavigator from './app/components/navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
