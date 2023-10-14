import React, { createContext, useState } from "react";

export const CartItemContext = createContext(null);

const CartItemProvider = (props) => {
  const [count,setCount] = useState(0);
  const [data, setData] = useState([]);

  const addToCart = (product) => {

    setCount(count+1);
    const existingData = data.find((item) => item.id === product.id);
    if (existingData) {
      const updatedData = data.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setData(updatedData);
    } else {
      setData([...data, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    data,
    count
  };

  console.log(data);

  return (
    <CartItemContext.Provider value={contextValue}>
      {props.children}
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
