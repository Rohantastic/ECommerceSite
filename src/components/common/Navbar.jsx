import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import CartItemContext from "../contexts/CartItemContext";
import AuthContext from '../contexts/AuthContext';

const Navbar = (props) => {
  
  const authCtx = useContext(AuthContext);
  console.log("is logged in? :",authCtx.isLoggedIn);

  return (
    <nav className='navbar-div'>
      <NavLink to="/">Home</NavLink>
      {authCtx.isLoggedIn && <NavLink to="/store">Store</NavLink>}
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact us</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/cart" id="cart-button" onClick={props.onClick}>Cart <span id="cart-amount">0</span></NavLink>
    </nav>
  );
}

export default Navbar;
