import React, { createContext, useState } from "react";

export const CartItemContext = createContext(null);

var email = localStorage.getItem("emailOfLogger");
email = email.replace('.','');
email = email.replace('@','');
const CartItemProvider = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  };

  const addToCart = (product) => {
    setCount(count + 1);
    const existingData = data.find((item) => item.id === product.id);

    if (existingData) {
      const updatedData = data.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateData(updatedData);
    } else {
      // Don't include userEmail in the item
      const newItem = { ...product, quantity: 1 };
      updateData([...data, newItem]);
      postData(newItem); // Send a POST request for the new item
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

  const postData = (item) => {
    
    fetch(`https://crudcrud.com/api/fd85f9620ef3405fb7c89b71c1ff07ca/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: item.title,
        price: item.price,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data sent successfully:", data);
        console.log("ID: ", data._id);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    data,
    count,
    setData: updateData,
  };

  return (
    <CartItemContext.Provider value={contextValue}>
      {props.children}
    </CartItemContext.Provider>
  );
};

export default CartItemProvider;
