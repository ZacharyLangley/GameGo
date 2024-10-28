import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useProductActions } from '../../../../stores/useProducts';

export const ProductSearch = React.memo(() => {
    const { setSearchedProducts } = useProductActions();
    const [ search, setSearch ] = useState('');

    const handleChange = useCallback((text: string) => {
        setSearch(text);
        setSearchedProducts(text);
    }, [setSearchedProducts]);

    return (
        <SearchBar value={search} onChangeText={handleChange} containerStyle={styles.container} lightTheme={true} round={true}/>
    );
});

const styles = StyleSheet.create({
    container: { flex: 3, flexDirection: 'row', backgroundColor: 'white', borderColor: 'white' },
});
