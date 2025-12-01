import React, { createContext, useEffect, useReducer, useState } from "react";
import all_product from "../Asset/all_product";

export const ShopContext = createContext();
const initialCart = () => {
  const saved = localStorage.getItem("cart");
  if (saved) return JSON.parse(saved);
  return all_product.reduce((acc, p) => {
    acc[p.id] = 0;
    return acc;
  }, {});
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, [action.id]: state[action.id] + 1 };

    case "REMOVE":
      return { ...state, [action.id]: Math.max(0, state[action.id] - 1) };

    case "DELETE":
      return { ...state, [action.id]: 0 };

    default:
      return state;
  }
};
const ShopContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, {}, initialCart);
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = all_product.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (id) => dispatch({ type: "ADD", id });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", id });
  const deleteFromCart = (id) => dispatch({ type: "DELETE", id });
  const getTotalCartAmount = () =>
    all_product.reduce((acc, item) => {
      return acc + item.new_price * (cartItems[item.id] || 0);
    }, 0);
  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((a, b) => a + b, 0);

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        searchQuery,
        setSearchQuery,
        searchResults,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
