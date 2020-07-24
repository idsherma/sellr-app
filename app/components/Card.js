import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function Card({ title, subTitle, image, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
       borderRadius: 15, 
       backgroundColor: colors.white, 
       marginBottom: 20, 
       overflow: 'hidden'
    }, 
    image: {
        width: "100%", 
        height: 200
    }, 
    textContainer: {
        padding: 20
    }, 
    title: {
        marginBottom: 7
    }, 
    subTitle: {
        color: colors.secondary, 
        fontWeight: '700'
    }
})

export default Card;


