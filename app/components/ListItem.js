import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../components/AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light_grey_02} onPress={onPress}>
                <View style={styles.container}>
                {ImageComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
                </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        marginLeft: 10, 
        padding: 15
    },
    detailsContainer: {
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
        color: colors.darkgrey
    }
});

export default ListItem;
