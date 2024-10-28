import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { defaultHeaderConfig } from '../../../shared/constants/headerConfigs';
import { ProductList } from './components/ProductList';
import { ProductSearch } from './components/SearchBar';
import { FilterDialog, FilterDialogButton } from './components/Filters';

export const ProductListHeaderConfig: NativeStackNavigationOptions = {
  title: 'GameGo',
  ...defaultHeaderConfig,
};

export const ProductListScreen = React.memo(() => {
  return [
    <View style={styles.container} key={'product-content'}>
      <View style={styles.actions}>
        <ProductSearch />
        <FilterDialogButton />
      </View>
      <ProductList />
    </View>,
    <FilterDialog key={'filter-dialog'} />,
  ];
});

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  actions: { width: '100%', flexDirection: 'row', maxHeight: 70 },
});
