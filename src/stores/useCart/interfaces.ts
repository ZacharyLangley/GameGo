import { Product } from '../../../shared/interfaces';

interface CheckoutActions {
    setAddressLine1: (addressLine1: string) => void;
    setAddressLine2: (addressLine2: string) => void;
    setCity: (city: string) => void;
    setState: (state: string) => void;
    setZipCode: (zipCode: string) => void;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setPhoneNumber: (phoneNumber: string) => void;
    setCardNumber: (cardNumber: string) => void;
    setExpirationDate: (expirationDate: string) => void;
    setSecurityCode: (securityCode: string) => void;
    setCardType: (type: string) => void;
    setUseShippingAddress: (useShippingAddress: boolean) => void
}

interface CartActions {
    addItemToCart: (product?: Product | null) => void
    removeItemToCart: (product?: Product | null) => void
    resetCart: () => void;
    checkout: CheckoutActions;
}

export interface CartItem {
    product: Product,
    quantity: number,
    totalCost?: number,
}

export interface Address {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}

export interface PaymentInfo {
    cardNumber?: string;
    expirationDate?: string;
    securityCode?: string;
    type?: string;
    useShippingAddress?: boolean;
}

export interface Checkout {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    shippingAddress?: Address;
    paymentInfo?: PaymentInfo
}

export interface CartState {
    cartItems?: CartItem[];
    totalQuantity?: number;
    totalCost: number;
    totalNetCost: number;
    totalTaxes: number;
    currentSalesTax: number;
    checkout?: Checkout;
    actions: CartActions;
}
