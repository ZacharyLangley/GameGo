import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/themed';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Routes } from '../../../navigators/constants';
import { useCartActions, useCartItems } from '../../../stores/useCart';

export const CheckoutButton = React.memo(() => {
    const nav = useNavigation();
    const cartItems = useCartItems();
    const { resetCart } = useCartActions()
    const handleClear = useCallback(() => {
        resetCart();
    }, [resetCart]);

    const handlePress = useCallback(() => {
        if (cartItems && cartItems.length > 0) {
            // @ts-ignore
            nav.navigate(Routes.CheckoutScreen);
        }
    }, [cartItems, nav]);

    return (
        <View style={styles.container}>
            <Button style={styles.checkoutBtn} title={'Checkout'} onPress={handlePress}/>
            { cartItems && cartItems.length > 0 && <Button title={'Clear Cart'} onPress={handleClear} color={'error'}/>}
        </View>
    );
});

const styles = StyleSheet.create({
    container: { marginHorizontal: 16 },
    checkoutBtn: { marginBottom: 8 },
})