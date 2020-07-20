import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.dark_grey} style={styles.icon}/> }
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light_grey_02, 
        borderRadius: 25, 
        flexDirection: "row", 
        width: '100%', 
        padding: 15, 
        marginVertical: 10
    },  
    icon: {
        marginRight: 10
    }
})

export default AppTextInput;
