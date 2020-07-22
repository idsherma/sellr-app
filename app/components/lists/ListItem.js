import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from '../AppText';
import colors from '../../config/colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light_grey_02} onPress={onPress}>
                <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText style={styles.subtitle} numberOfLines={2}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons name="chevron-right" size={25} color={colors.dark_grey}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        marginLeft: 10, 
        padding: 15, 
        backgroundColor: colors.white, 
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 1, 
        marginLeft: 10, 
        justifyContent: 'center'
    },
    image: {
        width: 70, 
        height: 70, 
        borderRadius: 35
    }, 
    title: {
        fontWeight: '500'
    }, 
    subtitle: {
        color: colors.dark_grey
    }
});

export default ListItem;
