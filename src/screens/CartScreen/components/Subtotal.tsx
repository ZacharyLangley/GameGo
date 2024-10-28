import { Divider } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useCartTotalCost, useCartTotalNetCost, useCartTotalTaxCost } from '../../../stores/useCart';
import { FormatPrice } from '../../../../shared/utils/price';

export const Subtotal = React.memo(() => {
    return (
        <View style={[styles.container]}>
            <Divider />
            <EstimatedGrossCost />
            <EstimatedTaxes />
            <EstimatedNetCost />
        </View>
    );
});

const styles = StyleSheet.create({
    container: { marginBottom: 16 },
});

export const EstimatedGrossCost = React.memo(() => {
    const totalCost = useCartTotalCost();
    return <CostItem label={'Est. Gross Total cost:'} value={FormatPrice(totalCost)} />;
});

export const EstimatedTaxes = React.memo(() => {
    const taxedCost = useCartTotalTaxCost();
    return <CostItem label={'Taxes: '} value={FormatPrice(taxedCost)} />;
});

export const EstimatedNetCost = React.memo(() => {
    const taxedCost = useCartTotalNetCost();
    return <CostItem label={'Est. Net Cost: '} value={FormatPrice(taxedCost)} />;
});

const CostItem = React.memo(({label, value}: {label: string, value: string }) => {
    return (
        <View style={costItemStyles.container}>
            <Text style={costItemStyles.label}>{label}</Text>
            <Text style={costItemStyles.price}>{value}</Text>
        </View>
    );
});

export const costItemStyles = StyleSheet.create({
    container: { flexDirection: 'row', marginHorizontal: 16, marginTop: 8 },
    label: { flex: 1, textAlign: 'left' },
    price: { flex: 1, textAlign: 'right', fontWeight: 'bold' },
});
