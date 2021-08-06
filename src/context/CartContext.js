import React from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext({
  cart: [],
  setCart: item => {},
  data: {},
  setData: item => {},
});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState({});

  return (
    <CartContext.Provider value={{ cart, setCart, data, setData }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
