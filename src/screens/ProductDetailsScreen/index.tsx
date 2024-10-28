import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { defaultHeaderConfig } from '../../../shared/constants/headerConfigs';
import { ProductDetailsHeader } from './components/ProductDetailsHeader';
import { Skeleton } from '@rneui/base';
import { ProductRating } from './components/ProductRating';
import { ProductCartActions } from './components/ProductCartActions';
import { ProductPrice } from './components/ProductPrice';

export const ProductDetailsHeaderConfig: NativeStackNavigationOptions = {
  title: 'GameGo',
  ...defaultHeaderConfig,
};

export const ProductDetailsScreen = React.memo(() => {
  return (
    <View style={styles.container}>
      <FillerImage />
      <ProductDetailsHeader />
      <ProductRating />
      <ProductPrice />
      <ProductCartActions />
    </View>
  );
});

const FillerImage = React.memo(() => <Skeleton style={styles.image} height={350} />);

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
  image: {
    flex: 1,
    maxHeight: 350,
    marginBottom: 16,
  },
});
