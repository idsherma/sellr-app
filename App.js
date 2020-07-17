import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { StyleSheet, Text, View } from "react-native";


// export default function App() {
//   return (
//     // <WelcomeScreen/>
//    <ViewImageScreen/>
//   );
// }

export default function App() {
  console.log("App executed");

  //borders
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue', 
        width: 100, 
        height: 100, 
        borderWidth: 10, 
        borderColor: 'royalblue', 
        borderRadius: 10,
      }}>
    </View>

    </View>
  );
}