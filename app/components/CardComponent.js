import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';
import colors from '../config/colors';

const CardComponent = () => {
    return (
        <View style={styles.cardContainer}>
           <Card 
            title="Red jacket for sale"
            subTitle="$100"
            image={require("../assets/jacket.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.grey, 
        padding: 20, 
        paddingTop: 100
    }
})

export default CardComponent;


