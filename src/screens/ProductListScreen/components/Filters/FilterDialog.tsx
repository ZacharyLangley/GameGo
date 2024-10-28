import { Dialog, ListItem } from '@rneui/themed';
import React, { useCallback } from 'react';
import { useFilterDialogActions, useFilterDialogOptions, useIsFilterDialogOpen } from './hooks/useFilterDialog';
import { FilterOption } from './hooks/interfaces';
import { TouchableOpacity } from 'react-native';

export const FilterDialog = React.memo(() => {
    const open = useIsFilterDialogOpen();
    const { toggleDialog } = useFilterDialogActions();
    return (
        <Dialog isVisible={open} onBackdropPress={toggleDialog}>
            <FilterDialogActions />
            <ResetFilterDialogAction />
        </Dialog>
    );
});

const FilterDialogActions = React.memo(() => {
    const options = useFilterDialogOptions();
    return options.map((option) => <FilterDialogActionItem option={option} />)
});

const ResetFilterDialogAction = React.memo(() => {
    const { resetFilter, toggleDialog } = useFilterDialogActions();

    const handlePress = useCallback(() => {
        resetFilter();
        toggleDialog();
    }, [resetFilter, toggleDialog]);

    return (
        <Dialog.Actions>
            <Dialog.Button title="Reset" onPress={handlePress}/>
        </Dialog.Actions>
    );
});


const FilterDialogActionItem = ({ option }: { option: FilterOption }) => {
    const { setFilter, toggleDialog } = useFilterDialogActions();

    const handleSelectFilter = useCallback(() => {
        setFilter(option.value);
        setTimeout(() => toggleDialog(), 250);
    }, [option.value, setFilter, toggleDialog]);

    return (
        <TouchableOpacity onPress={handleSelectFilter}>
            <ListItem>
                <ListItem.Title>{option.name}</ListItem.Title>
            </ListItem>
        </TouchableOpacity>
    )
}
