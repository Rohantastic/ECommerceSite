import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/about">About</Link>
      <Link to="/cart" id="cart-button" onClick={props.onClick}>Cart <span id="cart-amount">0</span></Link>
    </nav>
  );
}

export default Navbar;
