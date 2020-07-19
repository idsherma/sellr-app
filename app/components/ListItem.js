import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image}) {
    return (
        <View style={styles.container}>
           <Image style={styles.image} source={image} />
           <View>
               <AppText style={styles.title}>{title}</AppText>
               <AppText style={styles.subtitle}>{subTitle}</AppText>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        marginLeft: 10
    },
    image: {
        width: 70, 
        height: 70, 
        borderRadius: 35, 
        marginRight: 10
    }, 
    title: {
        fontWeight: '500'
    }, 
    subtitle: {
        color: colors.darkgrey
    }
});

export default ListItem;
