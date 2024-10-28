import React, { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Product } from '../../../../../shared/interfaces';
import { useAvailableProducts, useFilteredAvailableProducts, useProductActions } from '../../../../stores/useProducts';
import { ListItem, Skeleton } from '@rneui/themed';
import { FormatPrice } from '../../../../../shared/utils/price';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../../navigators/constants';

export const ProductList = React.memo(() => {
    const availableProducts = useAvailableProducts();
    const filteredAvailableProducts = useFilteredAvailableProducts();

    const renderItem = useCallback(({ item }: { item: Product }) => <ProductListItem item={item}/>, []);
    const keyExtractor = useCallback((item: Product) => item?.id, []);

    return (
        <View style={styles.container}>
            <FlatList data={filteredAvailableProducts.length > 0 ? filteredAvailableProducts : availableProducts} renderItem={renderItem} keyExtractor={keyExtractor}/>
        </View>
    );
});

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%' },
});

export const ProductListItem = React.memo(({ item }: { item: Product }) => {
    const { setSelectedProduct } = useProductActions();
    const nav = useNavigation();

    const handlePress = useCallback(() => {
        setSelectedProduct(item);
        // @ts-ignore
        nav.navigate(Routes.ProductDetailsScreen);
    }, [setSelectedProduct, item, nav]);

    return (
        <TouchableOpacity onPress={handlePress}>
            <ListItem bottomDivider key={item.id}>
                <ListItem.Content style={productListItemStyles.left}>
                    <Skeleton width={40} height={40}/>
                </ListItem.Content>
                <ListItem.Content style={productListItemStyles.center}>
                    <ListItem.Title style={productListItemStyles.title}>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content style={productListItemStyles.right}>
                    <ListItem.Subtitle style={productListItemStyles.price}>{FormatPrice(item?.price)}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    );
});

const productListItemStyles = StyleSheet.create({
    left: { flex: 0 },
    center: { flex: 1 },
    right: { flex: 0 },
    title: { fontWeight: 'bold' },
    price: { fontWeight: 'bold' },
});