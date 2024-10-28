import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './constants';
import { ProductStackScreen, ProductStackScreenConfig } from './ProductTab';
import { PurchaseStackScreen, PurchaseStackScreenConfig } from './PurchaseStack';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
};

export const Navigation = React.memo(() => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions} initialRouteName={Routes.ProductStack}>
                <Tab.Screen name={Routes.ProductStack} component={ProductStackScreen} options={ProductStackScreenConfig} />
                <Tab.Screen name={Routes.PurchaseStack} component={PurchaseStackScreen} options={PurchaseStackScreenConfig}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
});
