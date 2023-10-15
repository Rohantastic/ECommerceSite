import React, { useContext } from 'react';
import "./Cart.css";
import Header from '../common/Header';
import Footer from '../common/Footer';
import { CartItemContext } from '../contexts/CartItemContext';

const Cart = () => {
    const cartData = useContext(CartItemContext);

    let noDataPresent = 0; // Initialize it to 0

    if (cartData.data.length === 0) {
        noDataPresent = 1; // Set it to 1 if cartData.data is empty
    }

    return (
        <>
            <Header />
            <div className='cart-container'>
                <h2>Cart</h2>
                {noDataPresent !== 1 ? (
                    <div className="cart-item-table">
                        <table border="1" className='cart-table'>
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
                                        <td>{item.quantity} <button onClick={() => cartData.removeFromCart(item.id)}>Remove</button></td>
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
    )
}

export default Cart;

