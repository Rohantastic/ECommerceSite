import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartItemContext } from '../contexts/CartItemContext';
import AuthContext from '../contexts/AuthContext';
import './Product.css';

const Product = (props) => {
  const cartCtx = useContext(CartItemContext);
  const authCtx = useContext(AuthContext);

  const productAddToastify = () => {
     toast.success('Added to Cart!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleAddToCart = () => {
    const userEmail = localStorage.getItem('emailOfLogger');
    cartCtx.addToCart(props, userEmail);
    productAddToastify();
  };

  return (
    <>
      <div className='music-items'>
        <h2 style={{ fontSize: '15px' }}>Product: {props.id}</h2>
        <img src={props.imageUrl} className='product-image' alt={`Product ${props.id}`} />
        <Link className='music-items-link' to={`/store/${props.id}`}>
          <h2>{props.title}</h2>
        </Link>
        <p>${props.price}</p>
        <button className='cart-button' onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Product;
