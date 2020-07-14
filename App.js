import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, StatusBar, Platform } from 'react-native';
// import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export default function App() {
  //const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>Hello World! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text> */}
      {/* <Text>Hello World!</Text> */}

      {/* <Image source={require('./assets/icon.png')} /> */}

        {/* <TouchableOpacity onPress={() => console.log('image tapped')}>
          <Image source={{
            width: 200, 
            height: 300,
            uri: "https://picsum.photos/id/237/200/300"}} /> 
        </TouchableOpacity> */}

        {/* ALERTS */}
        {/* <Button title="click me" onPress={() => Alert.alert("my title", "my message", [
          {text: "yes", onPress: () => console.log('yes clicked')}, 
          {text: 'no', onPress: () => console.log('no clicked')}
        ])}/> */}

       {/* <Button
       title="Click Me"
       onPress={() =>
        Alert.prompt("My title", "My message", text => console.log(text))
        }
       /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: "center", 
    alignItems: "center", 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  },
});
