import React, { useContext } from 'react'
import "./Cart.css";
import Header from '../common/Header';
import Footer from '../common/Footer';
import { CartItemContext } from '../contexts/CartItemContext';




const Cart = () => {

    const cartData = useContext(CartItemContext); 
    console.log("carting:: ", cartData);
    return (
        <>
            <Header />
            <div className='cart-container'>
                <h2>Cart</h2>
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
                            {cartData.data.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.price}</td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity} <button onClick={()=>{cartData.removeFromCart(index)}}>Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart