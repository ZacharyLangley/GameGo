import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { defaultHeaderConfig } from '../../../shared/constants/headerConfigs';
import { CartItemList } from './components/CartItemList';
import { Subtotal } from './components/Subtotal';
import { CheckoutButton } from './components/CheckoutButton';

export const CartHeaderConfig: NativeStackNavigationOptions = {
  title: 'GameGo',
  ...defaultHeaderConfig,
};

export const CartScreen = React.memo(() => {
  return [
    <View style={styles.container} key={'product-content'}>
      <CartItemList />
      <Subtotal />
      <CheckoutButton />
    </View>,
  ];
});

const styles = StyleSheet.create({
  container: { flex: 1 },
});
