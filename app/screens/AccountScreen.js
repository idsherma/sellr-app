import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import routes from '../components/navigation/routes';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
      targetScreen: routes.LISTING_EDIT
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen: routes.MESSAGES
    },
];
  

const AccountScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Jade Maximillian"
                    subTitle="jadelikesart@mail.com"
                    image={require('../assets/avatar-1.png')}
                />
            </View>
            <View style={styles.container}>
               <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        IconComponent={
                            <Icon 
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                        onPress={() => navigation.navigate(item.targetScreen)}
                    />
                }
               />
            </View>

            <ListItem 
                title="Log out" 
                IconComponent={
                    <Icon 
                        name="logout"
                        backgroundColor="#ffe66d"
                    />
                }
            />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }, 
    screen: {
        backgroundColor: colors.light_grey_02
    }
})

export default AccountScreen;


