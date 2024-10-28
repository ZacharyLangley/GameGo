import { ProductType } from '../../../../../../shared/types';

interface FilterDialogActions {
    setFilter: (value?: ProductType) => void;
    resetFilter: () => void;
    toggleDialog: () => void;
}

export interface FilterOption { 
    name: string,
    value: ProductType,
}

export interface FilterDialogState {
    filterOptions: FilterOption[],
    selectedFilter?: ProductType | null,
    open: boolean,
    actions: FilterDialogActions;
}
