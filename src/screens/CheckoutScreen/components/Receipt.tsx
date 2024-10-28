import React, { useCallback } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { useCartItems } from '../../../stores/useCart';
import { CartItem } from '../../../stores/useCart/interfaces';
import { Divider, ListItem, Text } from '@rneui/themed';
import { FormatPrice } from '../../../../shared/utils/price';
import { Subtotal } from '../../CartScreen/components/Subtotal';
const { width } = Dimensions.get('screen');

export const Receipt = React.memo(() => {
    const cartItems = useCartItems();

    const renderItem = useCallback(({ item }: {item: CartItem}) => {
        return <ReceiptItem item={item}/>;
    }, []);

    const keyExtractor = useCallback((item: CartItem) => item.product.id, [])

    return (
        <View style={listStyles.container}>
            <Text h4 style={listStyles.header}>{'Cart: '}</Text>
            <Divider/>
            <FlatList data={cartItems} renderItem={renderItem} keyExtractor={keyExtractor}/>
            <View style={listStyles.subTotal}>
                <Subtotal />
            </View>
        </View>
    );
});

const listStyles = StyleSheet.create({
    container: { width: '100%', maxWidth: width, backgroundColor: 'white' },
    header: { margin: 16 },
    subTotal: { marginHorizontal: 16 },
});

const ReceiptItem = React.memo(({ item }: { item: CartItem }) => {
    return (
        <ListItem style={receiptItemStyles.container}>
            <ListItem.Subtitle style={receiptItemStyles.name}>{item.product.name}</ListItem.Subtitle>
            <ListItem.Subtitle style={receiptItemStyles.quantity}>{`x ${item.quantity}`}</ListItem.Subtitle>
            <ListItem.Subtitle style={receiptItemStyles.subTotal}>{FormatPrice(item.totalCost)}</ListItem.Subtitle>
        </ListItem>
    );
});

const receiptItemStyles = StyleSheet.create({
    container: { flexDirection: 'row', maxWidth: width },
    name: { width: '52%', marginLeft: 16 },
    quantity: { width: '10%',  textAlign: 'right'  },
    subTotal: { width: '22%', textAlign: 'right', marginRight: 16 },
});
