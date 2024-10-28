import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCartItems } from '../../../stores/useCart';
import { CartItem } from '../../../stores/useCart/interfaces';
import { useProductActions } from '../../../stores/useProducts';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from '@rneui/themed';
import { Skeleton } from '@rneui/base';
import { FormatPrice } from '../../../../shared/utils/price';
import { Routes } from '../../../navigators/constants';

export const CartItemList = React.memo(() => {
    const cartItems = useCartItems();

    const renderItem = useCallback(({ item }: { item: CartItem }) => <CartListItem item={item}/>, []);
    const keyExtractor = useCallback((item: CartItem) => item?.product.id, []);

    return (
        <View style={styles.container}>
            {
                (cartItems && cartItems?.length > 0)
                    ? <FlatList data={cartItems} renderItem={renderItem} keyExtractor={keyExtractor}/>
                    : <Text style={styles.empty}>{'No Items In Your Cart'}</Text>
            }
        </View>
    );
});

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', maxHeight: 550 },
    empty: { textAlign: 'center', margin: 16, fontSize: 14, fontWeight: 'bold' },
});

export const CartListItem = React.memo(({ item }: { item: CartItem }) => {
    const { setSelectedProduct } = useProductActions();
    const nav = useNavigation();

    const handlePress = useCallback(() => {
        setSelectedProduct(item.product);
        // @ts-ignore
        nav.navigate(Routes.ProductDetailsScreen);
    }, [setSelectedProduct, item, nav]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <ListItem bottomDivider key={item.product.id}>
                <ListItem.Content style={cartListItemStyles.left}>
                    <Skeleton width={40} height={40}/>
                </ListItem.Content>
                <ListItem.Content style={cartListItemStyles.center}>
                    <ListItem.Title style={cartListItemStyles.title}>{item.product.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content style={cartListItemStyles.right}>
                <ListItem.Subtitle>{`x ${item.quantity}`}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content style={cartListItemStyles.right}>
                    <ListItem.Subtitle style={cartListItemStyles.price}>{FormatPrice(item?.totalCost)}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    );
});

const cartListItemStyles = StyleSheet.create({
    left: { flex: 0 },
    center: { flex: 1 },
    right: { flex: 0 },
    title: { fontWeight: 'bold' },
    price: { fontWeight: 'bold' },
});