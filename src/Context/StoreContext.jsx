import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updatedQty = prev[itemId] - 1;
      return { ...prev, [itemId]: updatedQty };
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = food_list.find(f => f._id === id);
      if (item && cartItems[id] > 0) {
        total += item.price * cartItems[id];
      }
    }
    return total;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
