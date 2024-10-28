import { create } from 'zustand';
import { FilterDialogState, FilterOption } from './interfaces';
import { ProductType } from '../../../../../../shared/types';
import { useProductStore } from '../../../../../stores/useProducts';

const defaultFilterOptions: FilterOption[] = [
    { name: 'Videogame', value: 'videogame' },
    { name: 'Console', value: 'console' },
    { name: 'Clothing', value: 'clothing' },
    { name: 'Misc', value: 'other' },
]

export const useFilterDialogStore = create<FilterDialogState>((set, get) => ({
    filterOptions: defaultFilterOptions,
    selectedFilter: null,
    open: false,
    actions: {
        setFilter: (value?: ProductType) => {
            set({ selectedFilter: value });
            const { setFilteredProducts } = useProductStore.getState().actions;
            setFilteredProducts(value);
        },
        resetFilter: () => {
            set({ selectedFilter: null });
            const { setFilteredProducts } = useProductStore.getState().actions;
            setFilteredProducts();
        },
        toggleDialog: () => {
            const open = get().open;
            set({ open: !open });
        },
    },
}));

export const useIsFilterDialogOpen = () => useFilterDialogStore(s => s.open);
export const useFilterDialogOptions = () => useFilterDialogStore(s => s.filterOptions);
export const useSelectedFilter = () => useFilterDialogStore(s => s.selectedFilter);
export const useFilterDialogActions = () => useFilterDialogStore(s => s.actions);
