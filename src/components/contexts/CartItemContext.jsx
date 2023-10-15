import React, { createContext, useState } from "react";

export const CartItemContext = createContext(null);

const CartItemProvider = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);



  //function to add product into the cart
  const addToCart = (product) => {

    setCount(count + 1);
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

  //function to remove product from cart
  const removeFromCart = (id) => {
    const productToRemove = data.find((item) => item.id === id);
  
    if (productToRemove) {
      if (productToRemove.quantity > 1) {
        // If there is more than 1 quantity, decrease the quantity by 1
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setData(updatedData);
      } else {
        // If there is only 1 quantity, remove the product from the cart
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      }
    }
  };


  //object of context 
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
