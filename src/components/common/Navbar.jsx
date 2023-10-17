import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import CartItemContext from "../contexts/CartItemContext";

const Navbar = (props) => {
  const count = useContext(CartItemContext); 
  let quantity = 0;

  // for(let i = 0 ; i < count.length ; i++){
  //   quantity+= count.cartElements[i].quantity;
  // }

  return (
    <nav className='navbar-div'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/store">Store</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact us</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/cart" id="cart-button" onClick={props.onClick}>Cart <span id="cart-amount">{quantity}</span></NavLink>
    </nav>
  );
}

export default Navbar;
