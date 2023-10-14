import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CartContext } from '../contexts/CartContext';

const Navbar = (props) => {
  const count = useContext(CartContext); 
  let quantity = 0;
  for(let i = 0 ; i < count.cartElements.length ; i++){
    quantity+= count.cartElements[i].quantity;
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/about">About</Link>
      <Link to="/cart" id="cart-button" onClick={props.onClick}>Cart <span id="cart-amount">{quantity}</span></Link>
    </nav>
  );
}

export default Navbar;
