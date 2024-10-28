import { Product } from '../../../shared/interfaces';
import { ProductType } from '../../../shared/types';

interface ProductActions {
    setAvailableProducts: (products: Product[]) => void;
    setSearchedProducts: (searchValue: string) => void;
    setFilteredProducts: (filter?: ProductType) => void;
    setSelectedProduct: (selectedProduct: Product) => void;
    resetSelectedProduct: () => void;
}

export interface ProductState {
    selectedProduct?: Product | null;
    availableProducts: Product[];
    filteredAvailableProducts: Product[];
    actions: ProductActions;
}
