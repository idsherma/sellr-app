import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ListItem from '../components/lists/ListItem';
import AppText from '../components/AppText';

import colors from '../config/colors';

const ListingDetailScreen = ({ route }) => {
    const listing = route.params; 
    
    return (
        <View>
            <Image style={styles.image} source={listing.image}></Image>
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
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


