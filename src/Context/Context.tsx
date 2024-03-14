import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import mockData from "../MockData.json";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  removeAll: () => void;
  getSearchResult: () => any;
  settingSearch: (searchValue: string) => void;
  searchByFunc: (searchBy: string) => void;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState<boolean>(true);

  const cartQuantity = cartItems.reduce(
    (quantiy, item) => item.quantity + quantiy,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  function removeAll() {
    setCartItems([]);
  }

  const settingSearch = (searchValue: string) => {
    setSearch(searchValue);
  };
  const searchByFunc = (searchBy: string) => {
    searchBy == "bycategory" ? setSearchBy(false) : setSearchBy(true);
  };
  const getSearchResult = () => {
    return mockData.filter((item) =>
      searchBy
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : item.additionalDetails.category
            .toLowerCase()
            .includes(search.toLowerCase())
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        removeAll,
        getSearchResult,
        settingSearch,
        searchByFunc,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
