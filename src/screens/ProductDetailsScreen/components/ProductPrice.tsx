import React from 'react';
import { useSelectedProduct } from '../../../stores/useProducts';
import { StyleSheet, View, Text } from 'react-native';
import { useCartSelectedItem } from '../../../stores/useCart';
import { FormatPrice } from '../../../../shared/utils/price';

export const ProductPrice = React.memo(() => {
    const selectedProduct = useSelectedProduct();
    const currentCartWithProduct = useCartSelectedItem(selectedProduct)

    return (
        <View style={styles.container}>
            <Price price={selectedProduct?.price} quantity={currentCartWithProduct?.quantity} />
        </View>
    )
});

const Price = React.memo(({ price, quantity }: { price?: number, quantity?: number | null }) => {
    return (
        <View style={styles.container}>
            <View style={styles.valueLabel}>
                <Text style={styles.label}>{'Price: '}</Text>
                <Text>{FormatPrice(price)}</Text>
            </View>
            {
                quantity &&
                <View style={styles.valueLabel}>
                    <Text style={styles.label}>{'In Cart: '}</Text>
                    <Text>{quantity}</Text>
                </View>
            }
        </View>
    )
})

const styles = StyleSheet.create({
    container: { flex: 1, maxHeight: 60, flexDirection: 'row', marginVertical: 8 },
    valueLabel: { flexDirection: 'row', flex: 1 },
    label: { marginRight: 8 },
});