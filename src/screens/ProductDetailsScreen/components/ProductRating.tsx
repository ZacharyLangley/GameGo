import React from 'react';
import { useSelectedProduct } from '../../../stores/useProducts';
import { StyleSheet, View, Text } from 'react-native';
import { AirbnbRating } from '@rneui/themed';


export const ProductRating = React.memo(() => {
    const selectedProduct = useSelectedProduct();

    return (
        <View style={styles.container}>
            <Text>{'Rating:'}</Text>
            <AirbnbRating isDisabled ratingContainerStyle={styles.ratingContainer} count={5} defaultRating={selectedProduct?.rating} size={15} reviewSize={0}/>
        </View>
    );
});

const styles = StyleSheet.create({
    container: { maxHeight: 60, flexDirection: 'row', marginVertical: 8 },
    ratingContainer: { flex: 0, maxHeight: 0, maxWidth: 20, top: -2, left: 70 },
});