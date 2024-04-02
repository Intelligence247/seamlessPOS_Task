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

type WishItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  getWishQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  increaseWishQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeFromWish: (id: number) => void;
  cartQuantity: number;
  wishQuantity: number;
  cartItems: CartItem[];
  wishItems: WishItem[];
  removeAll: () => void;
  getSearchResult: () => any;
  settingSearch: (searchValue: string) => void;
  searchByFunc: (searchBy: string) => void;
  openWish: () => void;
  isOpen: boolean;
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
  const [wishItems, setWishItems] = useLocalStorage<WishItem[]>(
    "shopping-wish",
    []
  );
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const cartQuantity = cartItems.reduce(
    (quantiy, item) => item.quantity + quantiy,
    0
  );

  const wishQuantity = wishItems.reduce(
    (wish_quantity, item) => item.quantity + wish_quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function getWishQuantity(id: number) {
    return wishItems.find((item) => item.id === id)?.quantity || 0;
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

  function increaseWishQuantity(id: number) {
    setWishItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.quantity === id) {
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

  function removeFromWish(id: number) {
    setWishItems((currItems) => {
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
    setSearchBy(searchBy);
  };
  const getSearchResult = () => {
    return mockData.filter((item) =>
      searchBy === "" || searchBy === "default"
        ? item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.additionalDetails.category
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.price.toString().includes(search.toLowerCase())
        : searchBy === "byname"
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : searchBy === "bycategory"
        ? item.additionalDetails.category
            .toLowerCase()
            .includes(search.toLowerCase())
        : ""
    );
  };

  // const openWish = () => setIsOpen(!isOpen);
  const openWish = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        getWishQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        removeFromWish,
        cartItems,
        wishItems,
        cartQuantity,
        wishQuantity,
        removeAll,
        getSearchResult,
        settingSearch,
        searchByFunc,
        increaseWishQuantity,
        openWish,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
