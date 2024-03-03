import React, { createContext, useState, ReactNode } from 'react';
import mockData from '../../MockData';

interface Product {
    id: number;
    price: number;
    // Add other product properties as needed
}

interface CartItem {
    [productId: number]: number; // Key is product ID, value is quantity
}

export const ShopContext = createContext<{
    cartItems: CartItem;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
    editInput: (newAmount: number, itemId: number) => void;
    gettotalAmount: () => number;
} | null>(null);

const getDefaultCart: () => CartItem = () => {
    const cart: CartItem = {};
    for (let i = 1; i <= mockData.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem>(getDefaultCart);

    const gettotalAmount = (): number => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                const itemInfo = mockData.find((product) => product.id === Number(itemId));
                if (itemInfo) {
                    totalAmount += cartItems[itemId] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId: number): void => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId: number): void => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const editInput = (newAmount: number, itemId: number): void => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        editInput,
        gettotalAmount,
    };


    return <ShopContext.Provider value={ contextValue }> { children } < /ShopContext.Provider>;  
};
