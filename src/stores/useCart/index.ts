import { create } from 'zustand';
import { CartItem, CartState } from './interfaces';
import { Product } from '../../../shared/interfaces';

export const parsePriceIntoDecimal = (price: number) => Math.floor(price * 100) / 100;

export const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    totalQuantity: 0,
    totalCost: 0,
    currentSalesTax: 0.09,
    totalNetCost: 0,
    totalTaxes: 0,
    checkout: {},
    actions: {
        addItemToCart: (product?: Product | null) => {
            if (!product) { return; }
            const currentItems = get().cartItems || [];
            const existingItem = currentItems?.find((cartItem: CartItem) => cartItem.product.id === product.id);

            let newItems = [];
            if (!existingItem) {
                newItems = [...currentItems, { product, quantity: 1, totalCost: product.price }]
            } else {
                newItems = currentItems.map((cartItem) =>
                    cartItem.product.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1, totalCost: parsePriceIntoDecimal((cartItem?.product?.price || product?.price || 0) * (cartItem.quantity + 1)) }
                        : cartItem
                );
            }

            const totalQuantity = newItems.reduce((sum, item) => sum + item.quantity, 0);
            const totalCost =  parsePriceIntoDecimal(newItems.reduce((sum, item) => sum + item.quantity * (item.product.price || 1), 0));
            const totalTaxes = parsePriceIntoDecimal(totalCost *  get().currentSalesTax);
            const totalNetCost = parsePriceIntoDecimal((totalCost + totalTaxes));

            set({ cartItems: newItems, totalQuantity, totalCost, totalTaxes, totalNetCost });
        },
        removeItemToCart: (product?: Product | null) => {
            if (!product) { return; }
            const currentItems = get().cartItems || [];
            const existingItem = currentItems?.find((cartItem: CartItem) => cartItem.product.id === product.id);
            if (!existingItem) { return; }
            else {
                let newItems = [];

                if (existingItem.quantity > 1) {
                    newItems = currentItems.map((cartItem) =>
                        cartItem.product.id === product.id
                            ? { ...cartItem, quantity: cartItem.quantity - 1, totalCost: parsePriceIntoDecimal((cartItem?.product?.price || 0) * (cartItem.quantity - 1)) }
                            : cartItem
                    );
                } else {
                    newItems = currentItems?.filter((cartItem: CartItem) => cartItem.product.id !== product.id);
                }

                const totalQuantity = newItems.reduce((sum, item) => sum + item.quantity, 0);
                const totalCost =  parsePriceIntoDecimal(newItems.reduce((sum, item) => sum + item.quantity * (item.product.price || 1), 0))
                const totalTaxes = parsePriceIntoDecimal(totalCost *  get().currentSalesTax);
                const totalNetCost = parsePriceIntoDecimal((totalCost + totalTaxes));

                set({ cartItems: newItems, totalQuantity, totalCost, totalTaxes, totalNetCost });
            }
        },
        resetCart: () => set({ cartItems: [], totalCost: 0, totalQuantity: 0, totalTaxes: 0, totalNetCost: 0 }),
        checkout: {
            setAddressLine1: (addressLine1: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, shippingAddress: { ...checkout?.shippingAddress, addressLine1 } }});
            },
            setAddressLine2: (addressLine2: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, shippingAddress: { ...checkout?.shippingAddress, addressLine2 } }});
            },
            setCity: (city: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, shippingAddress: { ...checkout?.shippingAddress, city } }});
            },
            setState: (state: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, shippingAddress: { ...checkout?.shippingAddress, state } }});
            },
            setZipCode: (zipCode: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, shippingAddress: { ...checkout?.shippingAddress, zipCode } }});
            },
            setFirstName: (firstName: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, firstName }});
            },
            setLastName: (lastName: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, lastName }});
            },
            setPhoneNumber: (phoneNumber: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, phoneNumber }});
            },
            setCardNumber: (cardNumber: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, paymentInfo: { ...checkout?.paymentInfo, cardNumber } }});
            },
            setExpirationDate: (expirationDate: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, paymentInfo: { ...checkout?.paymentInfo, expirationDate } }});
            },
            setSecurityCode: (securityCode: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, paymentInfo: { ...checkout?.paymentInfo, securityCode } }});
            },
            setCardType: (type: string) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, paymentInfo: { ...checkout?.paymentInfo, type } }});
            },
            setUseShippingAddress: (useShippingAddress: boolean) => {
                const checkout = get().checkout;
                set({ checkout: { ...checkout, paymentInfo: { ...checkout?.paymentInfo, useShippingAddress } }});
            },
        },
    },
}));

export const useCartItems = () => useCartStore(s => s.cartItems);
export const useCartTotalQuantity = () => useCartStore(s => s.totalQuantity);
export const useCartTotalCost = () => useCartStore(s => s.totalCost);
export const useCartTotalTaxCost = () => useCartStore(s => s.totalTaxes);
export const useCartTotalNetCost = () => useCartStore(s => s.totalNetCost);
export const useCartCurrentSalesTax = () => useCartStore(s => s.currentSalesTax);
export const useCartSelectedItem = (selectedProduct?: Product | null) => useCartStore(s => {
    if (!selectedProduct) { return null; }
    return s.cartItems?.find((cartItem: CartItem) => cartItem.product.id === selectedProduct.id);
})
export const useCartActions = () => useCartStore(s => s.actions);
export const useCartCheckoutActions = () => useCartStore(s => s.actions.checkout);
export const useCartCheckout = () => useCartStore(s => s.checkout)