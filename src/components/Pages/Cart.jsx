import React, { useState, useEffect } from 'react';
import './Cart.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import axios from 'axios';

var email = localStorage.getItem("emailOfLogger");
email = email.replace('.', '');
email = email.replace('@', '');

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetchCartData();
    }
  }, [loading]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/0caf0b7e44b54c9bbac2339e786a59b9/${email}`);
      if (response.status === 200) {
        const data = response.data;
        console.log("Fetched data:", data);

        setCartItems(data); 
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  var count = 1;
  return (
    <>
      <Header />
      <div className='cart-container'>
        <h2>Cart</h2>
        {loading ? (
          <div>Loading...</div>
        ) : cartItems.length > 0 ? (
          <div className='cart-item-table'>
            <table border='1' className='cart-table'>
              <thead>
                <tr>

                  <th>Sr.No</th>
                  <th>ITEM</th>
                  <th>PRICE</th>
                  
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>{count++}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            <button className='buy-button'>Click To Buy</button>
          </div>
        ) : (
          <>No items in the cart</>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
