import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { CartItemContext } from '../contexts/CartItemContext';

const Cart = () => {
  const cartData = useContext(CartItemContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://crudcrud.com/api/dbc101a6becf433a81848b35259389e8/ecom'
        );

        if (response.ok) {
          const data = await response.json();
          // Assuming the response is an array of items
          cartData.setData(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  let noDataPresent = 0;

  if (cartData.data.length === 0) {
    noDataPresent = 1;
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Cart</h2>
        {loading ? (
          <div>Loading...</div>
        ) : noDataPresent !== 1 ? (
          <div className="cart-item-table">
            <table border="1" className="cart-table">
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {cartData.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      {item.quantity}{' '}
                      <button onClick={() => cartData.removeFromCart(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>No Data Present</>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
