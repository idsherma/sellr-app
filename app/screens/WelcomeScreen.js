import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
    return (
       <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text>Sell what you don't need!</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: "center"
    }, 
    logoContainer: {
        position: "absolute",
        top: 70, 
        alignItems: "center"
    },
    logo: {
        width: 100, 
        height: 100
    },
    loginButton: {
        width: '100%', 
        height: 70, 
        backgroundColor: 'tomato'
    }, 
    registerButton: {
        width: '100%', 
        height: 70, 
        backgroundColor: 'limegreen'
    } 
})

export default WelcomeScreen;

