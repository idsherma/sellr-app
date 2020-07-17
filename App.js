import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

//import AppText from './app/components/AppText';

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
      <MaterialCommunityIcons name="email" size={200} color="red"/>
    </View>
  );
}