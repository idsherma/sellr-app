import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ListItem from '../components/ListItem';
import AppText from '../components/AppText';

import colors from '../config/colors';

const ListingDetailScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View style={styles.textContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>

            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/avatar-2.png")}
                    title="Will Smith"
                    subTitle="8 Listings"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%', 
        height: 300
    }, 
    textContainer: {
        padding: 20
    }, 
    title: {
        fontSize: 24, 
        fontWeight: '500'
    }, 
    price: {
        color: colors.secondary, 
        fontWeight: '700', 
        fontSize: 20, 
        marginVertical: 10
    }, 
    userContainer: {
        marginVertical: 20
    }
})

export default ListingDetailScreen;


