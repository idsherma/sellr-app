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

  //Styling Text
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
    <Text style={{
     fontSize: 30, 
     fontStyle: 'italic', 
     fontWeight: "600", 
     color: 'tomato', 
     textTransform: 'capitalize', 
     textAlign: 'center'
     //fontFamily: "Roboto"
    }}>I love react native</Text>
    </View>
  );
}