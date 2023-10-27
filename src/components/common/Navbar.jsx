import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import AuthContext from '../contexts/AuthContext';
import { CartItemContext } from '../contexts/CartItemContext';

const Navbar = (props) => {
  
  const authCtx = useContext(AuthContext); //to check if user has logged in or not
  
  const cartItemCtx = useContext(CartItemContext);

  console.log("cartItemContext::", authCtx.email);
 
  return (
    <nav className='navbar-div'>
      <NavLink to="/">Home</NavLink>
      {authCtx.email && <NavLink to="/store">Store</NavLink>}
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact us</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/cart" id="cart-button" onClick={props.onClick}>Cart<span id="cart-amount"></span></NavLink>
    </nav>
  );
}

export default Navbar;
