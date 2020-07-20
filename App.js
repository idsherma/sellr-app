import React from 'react';
import { StyleSheet, Text, View } from "react-native";

//screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';

//components
import AppButton from './app/components/AppButton';
import CardComponent from './app/components/CardComponent';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
//import AppText from './app/components/AppText';

export default function App() {
  return (
  //<WelcomeScreen/>
  //<ViewImageScreen/>
  //<ListingDetailScreen/>

  //<MessagesScreen/>
  <Screen>
    <ListItem
      title="My title"
      subTitle="My subtitle"
      ImageComponent={<Icon name="email" />}
    />
    <ListItem
      title="My title"
      ImageComponent={<Icon name="email" />}
    />
  </Screen>

  // <View style={{
  //         flex: 1, 
  //         justifyContent: 'center', 
  //         alignItems: 'center'
  //  }}>
  //         <AppButton title="Login" onPress={() => console.log('tapped')}/>
  //   </View>
  
  );
}

// export default function App() {
//   return (
//     <View style={{
//       flex: 1, 
//       justifyContent: 'center', 
//       alignItems: 'center'
//     }}>
//       <AppText>hello world</AppText>
//     </View>
//   );
// }