import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../components/ListItem';

//currently hard coding data 
const messages = [
    {
        id: 1, 
        title: 'T1', 
        description: 'D1', 
        image: require('../assets/avatar-1.png')
    },
    {
        id: 2, 
        title: 'T2', 
        description: 'D2', 
        image: require('../assets/avatar-2.png')
    }
]

function MessagesScreen() {
    return (
        <SafeAreaView style={styles.screen}>
          <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
            <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
            /> } />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    screen: {
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        paddingTop: Constants.statusBarHeight
    }
})

export default MessagesScreen;