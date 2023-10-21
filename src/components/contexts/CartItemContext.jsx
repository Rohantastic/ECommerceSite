// CartItemContext.jsx

import React, { createContext, useState, useEffect } from "react";

export const CartItemContext = createContext(null);

const CartItemProvider = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  // Function to update the 'data' state
  const updateData = (newData) => {
    setData(newData);
  };

  const addToCart = (product, email) => {
    setUserEmail(email);
    setCount(count + 1);
    const existingData = data.find((item) => item.id === product.id);

    if (existingData) {
      const updatedData = data.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateData(updatedData); // Use the updateData function to update 'data'
    } else {
      updateData([...data, { ...product, quantity: 1, userEmail: email }]);
    }
  };

  const removeFromCart = (id) => {
    const productToRemove = data.find((item) => item.id === id);

    if (productToRemove) {
      if (productToRemove.quantity > 1) {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        updateData(updatedData);
      } else {
        const updatedData = data.filter((item) => item.id !== id);
        updateData(updatedData);
      }
    }
  };

  useEffect(() => {
    // Do something with data if needed
  }, [data]);

  const contextValue = {
    addToCart,
    removeFromCart,
    data,
    count,
    userEmail,
    setData: updateData, // Provide the updateData function in the context
  };

  useEffect(() => {
    // Post data and email to the specified URL
    const postData = async () => {
      try {
        const response = await fetch("https://crudcrud.com/api/ccb65ab9427246ada7a780395eac7a60/ecom", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data, userEmail }),
        });

        if (!response.ok) {
          console.error('Failed to post data:', response.statusText);
        }
      } catch (error) {
        console.error('Error posting data:', error.message);
      }
    };

    postData();
  }, [data, userEmail]);

  return (
    <CartItemContext.Provider value={contextValue}>
      {props.children}
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
