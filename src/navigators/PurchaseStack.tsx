import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Routes } from './constants';
import { CartHeaderConfig, CartScreen } from '../screens/CartScreen';
import { CheckoutHeaderConfig, CheckoutScreen } from '../screens/CheckoutScreen';
import { defaultTabConfig } from '../../shared/constants/headerConfigs';
import { ProductDetailsHeaderConfig, ProductDetailsScreen } from '../screens/ProductDetailsScreen';

const PurchaseStack = createNativeStackNavigator();

export const PurchaseStackScreenConfig: BottomTabNavigationOptions = {
    ...defaultTabConfig,
    tabBarIcon: ({ color, size }: {
        focused: boolean;
        color: string;
        size: number;
    }) => <Ionicons name="cart-outline" color={color} size={size} />,
};

export const PurchaseStackScreen = React.memo(() => {
    return (
        <PurchaseStack.Navigator initialRouteName={Routes.CartScreen}>
            <PurchaseStack.Screen name={Routes.CartScreen} component={CartScreen} options={CheckoutHeaderConfig}/>
            <PurchaseStack.Screen name={Routes.CheckoutScreen} component={CheckoutScreen} options={CartHeaderConfig}/>
            <PurchaseStack.Screen name={Routes.ProductDetailsScreen} component={ProductDetailsScreen} options={ProductDetailsHeaderConfig} />
        </PurchaseStack.Navigator>
    );
});
