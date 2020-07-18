import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { StyleSheet, Text, View } from "react-native";


import AppText from './app/components/AppText';

// export default function App() {
//   return (
//     // <WelcomeScreen/>
//    <ViewImageScreen/>
//   );
// }

export default function App() {
  //console.log("App executed");

  //Encapsulating Styles
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <AppText>hello world</AppText>
    </View>
  );
}