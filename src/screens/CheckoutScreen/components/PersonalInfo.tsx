import { Divider, Input, Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useCartCheckout, useCartCheckoutActions } from '../../../stores/useCart';

export const PersonalInfo = React.memo(() => {
    const { setFirstName, setLastName, setPhoneNumber } = useCartCheckoutActions();
    const checkout = useCartCheckout();

    return (
        <View style={personalInfoStyles.container}>
            <Text h4 style={personalInfoStyles.header}>{'Personal Info'}</Text>
            <Divider />
            <View style={personalInfoStyles.inputcontainer}>
                <Input placeholder="First Name" value={checkout?.firstName} onChangeText={setFirstName} />
                <Input placeholder="Last Name" value={checkout?.lastName} onChangeText={setLastName} />
                <Input placeholder="Phone Number" value={checkout?.phoneNumber} onChangeText={setPhoneNumber} />
            </View>
        </View>
    );
});

const personalInfoStyles = StyleSheet.create({
    container: { width: '100%', backgroundColor: 'white' },
    header: { margin: 16 },
    inputcontainer: { margin: 20 },
});
