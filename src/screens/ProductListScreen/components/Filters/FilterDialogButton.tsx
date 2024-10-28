import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFilterDialogActions } from './hooks/useFilterDialog';

export const FilterDialogButton = React.memo(() => {
    const { toggleDialog  } = useFilterDialogActions();
    return (
        <TouchableOpacity onPress={toggleDialog}>
            <View style={styles.iconContainer}>
                <Ionicons name="filter-outline" style={styles.icon}/>
            </View>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    iconContainer: {
        height: '100%',
        width: 70,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderTopWidth: 0.3,
        borderBottomWidth: 0.35,
    },
    icon: { fontSize: 40 },
});
