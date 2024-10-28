import { create } from 'zustand';
import { ProductState } from './interfaces';
import { dummyProducts } from '../../../shared/mockData/products';
import { Product } from '../../../shared/interfaces';
import { ProductType } from '../../../shared/types';

export const useProductStore = create<ProductState>((set, get) => ({
    availableProducts: dummyProducts,
    filteredAvailableProducts: [],
    selectedProduct: null,
    actions: {
        setAvailableProducts: (products: Product[]) => set({ availableProducts: products }),
        setSearchedProducts: (searchValue: string) => {
            if (!searchValue || searchValue.length === 0) { set({ availableProducts: dummyProducts, filteredAvailableProducts: [] }); }
            const filteredProducts = get().availableProducts.filter((product: Product) => product.name?.includes(searchValue));
            set({ filteredAvailableProducts: filteredProducts });
        },
        setFilteredProducts: (filter?: ProductType) => {
            if (!filter) { set({ availableProducts: dummyProducts, filteredAvailableProducts: [] }); }
            const filteredProducts = get().availableProducts.filter((product: Product) => product.type === filter);
            set({ filteredAvailableProducts: filteredProducts });
        },
        setSelectedProduct: (selectedProduct: Product) => set({ selectedProduct }),
        resetSelectedProduct: () => set({ selectedProduct: null }),
    },
}));

export const useAvailableProducts = () => useProductStore(s => s.availableProducts);
export const useFilteredAvailableProducts = () => useProductStore(s => s.filteredAvailableProducts);
export const useSelectedProduct = () => useProductStore(s => s.selectedProduct);
export const useProductActions = () => useProductStore(s => s.actions);
