import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed';
import { useSelectedProduct } from '../../../stores/useProducts';

export const ProductDetailsHeader = React.memo(() => {
    const selectedProduct = useSelectedProduct();

    return (
        <View>
            <Text style={styles.title}>{selectedProduct?.name}</Text>
            <Text style={styles.description}>{selectedProduct?.description}</Text>
            <Divider />
        </View>
    );
});

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        marginBottom: 16,
    },
})