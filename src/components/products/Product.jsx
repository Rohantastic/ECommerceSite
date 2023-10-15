import React, { useContext } from 'react'
import "./Product.css"
import { CartItemContext } from '../contexts/CartItemContext'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const cartCtx = useContext(CartItemContext);



    return (
        <>


            <div className='music-items'>
                <h2 style={{ fontSize: '15px' }}>Album:{props.id}</h2>
                <img src={props.imageUrl} className='product-image' />
                <Link className='music-items-link' to={`/store/${props.id}`}><h2>{props.title}</h2></Link>
                <p>${props.price}</p>
                <button className='cart-button' onClick={()=>{cartCtx.addToCart(props)}}>Add To Cart</button>
            </div>

        </>
    )
}

export default Product 