import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ProductListHeaderConfig, ProductListScreen } from '../screens/ProductListScreen';
import { ProductDetailsHeaderConfig, ProductDetailsScreen } from '../screens/ProductDetailsScreen';
import { Routes } from './constants';
import { defaultTabConfig } from '../../shared/constants/headerConfigs';

const ProductStack = createNativeStackNavigator();

export const ProductStackScreenConfig: BottomTabNavigationOptions = {
    ...defaultTabConfig,
    tabBarIcon: ({ color, size }: {
        focused: boolean;
        color: string;
        size: number;
    }) => <Ionicons name="list-outline" color={color} size={size} />,
};

export const ProductStackScreen = React.memo(() => {
    return (
        <ProductStack.Navigator initialRouteName={Routes.ProductListScreen}>
            <ProductStack.Screen name={Routes.ProductListScreen} component={ProductListScreen} options={ProductListHeaderConfig} />
            <ProductStack.Screen name={Routes.ProductDetailsScreen} component={ProductDetailsScreen} options={ProductDetailsHeaderConfig} />
        </ProductStack.Navigator>
    );
});
