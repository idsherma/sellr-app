import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../../screens/ListingScreens";
import ListingDetailsScreen from "../../screens/ListingDetailScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;
