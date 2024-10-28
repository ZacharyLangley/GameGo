import { Divider, Input, Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useCartCheckout, useCartCheckoutActions } from '../../../stores/useCart';

export const Location = React.memo(() => {
    const { setAddressLine1, setAddressLine2, setCity, setState, setZipCode } = useCartCheckoutActions();
    const checkout = useCartCheckout();

    return (
        <View style={locationStyles.container}>
            <Text h4 style={locationStyles.header}>{'Shipping Information'}</Text>
            <Divider />
            <View style={locationStyles.inputcontainer}>
                <Input placeholder="Address Line 1" value={checkout?.shippingAddress?.addressLine1} onChangeText={setAddressLine1} />
                <Input placeholder="Address Line 2" value={checkout?.shippingAddress?.addressLine2} onChangeText={setAddressLine2} />
                <Input placeholder="City" value={checkout?.shippingAddress?.city} onChangeText={setCity} />
                <Input placeholder="State" value={checkout?.shippingAddress?.state} onChangeText={setState} />
                <Input placeholder="Zip Code" value={checkout?.shippingAddress?.zipCode} onChangeText={setZipCode} />
            </View>
        </View>
    );
});

const locationStyles = StyleSheet.create({
    container: { width: '100%', backgroundColor: 'white' },
    header: { margin: 16 },
    inputcontainer: { margin: 20 },
});
