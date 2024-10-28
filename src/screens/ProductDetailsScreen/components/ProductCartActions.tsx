import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCartActions } from '../../../stores/useCart';
import { useSelectedProduct } from '../../../stores/useProducts';


export const ProductCartActions = React.memo(() => {
    const selectedProduct = useSelectedProduct();
    const { addItemToCart, removeItemToCart } = useCartActions();

    const handleAddItemToCart = useCallback(() => {
        addItemToCart(selectedProduct);
    }, [addItemToCart, selectedProduct]);

    const handleRemoveItemToCart = useCallback(() => {
        removeItemToCart(selectedProduct);
    }, [removeItemToCart, selectedProduct]);

    return (
        <View style={styles.container}>
            <Button radius={'sm'} type="solid" style={styles.add} onPress={handleAddItemToCart}>
                <Ionicons name="add-outline" color="white" style={styles.icon}/>
                {'Add to Cart'}
            </Button>
            <Button radius={'sm'} type="solid" color="error" style={styles.minus} onPress={handleRemoveItemToCart}>
                <Ionicons name="remove-outline" color="white" style={styles.icon}/>
                {'Remove from Cart'}
            </Button>
        </View>
    );
});

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignContent: 'space-between' },
    icon: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 8,
    },
    add: { marginHorizontal: 4 },
    minus: { marginHorizontal: 4 }
});
