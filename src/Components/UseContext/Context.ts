import { ReactNode, createContext, useState } from "react";
import mockData from "../../MockData";
interface ShopContextProps {
    cartItems: { [key: number]: number };
    getTotalAmount: () => number;
    addToCart: (itemID: number) => void;
  }
  
  export const ShopContext = createContext<ShopContextProps | null>(null);

  const getDefaultCart = (): { [key: number]: number } => {
    let cart: { [key: number]: number } = {};
    for (let i = 1; i <= mockData.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

    export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const [cartItems, setcartItems] = useState<any>(getDefaultCart)
    const [cartItems, setCartItems] = useState<{ [key: number]: number }>(getDefaultCart);
    const gettotalAmount = () => {
        let totalAmount: number = 0;
        for (const itemID in cartItems)
            if (cartItems[itemID] > 0) {
                let itemInfo = mockData.find((product) => product.id === Number(itemID))
                totalAmount += cartItems[itemID] * itemInfo?.price
            }
        return totalAmount;
    }
    const addToCart = (itemID: number) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }))
    }
}

