import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

import defaultStyles from '../config/styles';

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem }) {

    //const [modalVisible, setmodalVisible] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
        
    return (
        <>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(true); }}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.dark_grey} style={styles.icon}/> }

                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label: placeholder}
                    </AppText>

                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.dark_grey}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal 
                visible={false}
                onRequestClose={() => {Alert.alert("Modal has been closed.");
            }}>
                <View>
                    <Text>Hi World</Text>
                </View>
                <Button title="Close" onPress={() => {
                    setModalVisible(false);
                }}/>
            </Modal>
            {/* <Modal visible={modalVisible}
            animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setmodalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                            <PickerItem 
                            label={item.label} 
                            onPress={() => {
                                setmodalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                    />
                </Screen>
            </Modal> */}

        </>
    );
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
    }, 
    text: {
        flex: 1
    }
})

export default AppPicker;
