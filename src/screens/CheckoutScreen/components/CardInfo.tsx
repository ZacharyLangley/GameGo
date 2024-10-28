import { CheckBox, Divider, Input, Text } from '@rneui/themed';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useCartCheckout, useCartCheckoutActions } from '../../../stores/useCart';

export const CardInfo = React.memo(() => {
    const { setCardNumber, setExpirationDate, setSecurityCode, setCardType, setUseShippingAddress } = useCartCheckoutActions();
    const checkout = useCartCheckout();

    const handleCheckBox = useCallback(() => {
        setUseShippingAddress(!checkout?.paymentInfo?.useShippingAddress);
    }, [setUseShippingAddress, checkout]);

    return (
        <View style={cardInfoStyles.container}>
            <Text h4 style={cardInfoStyles.header}>{'Card Info'}</Text>
            <Divider />
            <View style={cardInfoStyles.inputcontainer}>
                <Input placeholder="Card Number" value={checkout?.paymentInfo?.cardNumber} onChangeText={setCardNumber} />
                <Input placeholder="Expiration Date (MM/YY)" value={checkout?.paymentInfo?.expirationDate} onChangeText={setExpirationDate} />
                <Input placeholder="Security Code" value={checkout?.paymentInfo?.securityCode} onChangeText={setSecurityCode} />
                <Input placeholder="Card Type" value={checkout?.paymentInfo?.type} onChangeText={setCardType} />
                <CheckBox checked={checkout?.paymentInfo?.useShippingAddress || false} title="Same As Shipping address?" onIconPress={handleCheckBox} />
            </View>
        </View>
    );
});

const cardInfoStyles = StyleSheet.create({
    container: { width: '100%', backgroundColor: 'white' },
    header: { margin: 16 },
    inputcontainer: { margin: 20 },
});
