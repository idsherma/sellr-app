import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

//currently hard coding data 
const initialMessages = [
    {
        id: 1, 
        title: 'Anne Hansberry', 
        description: 'Hi! Is this still available?', 
        image: require('../assets/avatar-1.png')
    },
    {
        id: 2, 
        title: 'Donnie LaRouche', 
        description: 'Hello! Im in interested in this item. When will you post more information?', 
        image: require('../assets/avatar-2.png')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //delete 'message' from messages
        setMessages(messages.filter((m) => m.id !== message.id));


    }

    return (
        <Screen>
          <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
            <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('message selected', item)}
                renderRightActions={() =>
                    <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                }
            /> } 
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2, 
                        title: 'T2', 
                        description: 'D2', 
                        image: require('../assets/avatar-2.png')
                    }
                ])
            }}
            />
        </Screen>

    )
}

const styles = StyleSheet.create({
  
})

export default MessagesScreen;