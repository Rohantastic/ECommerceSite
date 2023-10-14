import React from 'react'
import "./Product.css"

const Product = (props) => {

    return (
        <>


            <div className='music-items'>
                <h2 style={{ fontSize: '15px' }}>Album:{props.id}</h2>
                <img src={props.imageUrl} className='product-image' />
                <h2>{props.title}</h2>
                <p>${props.price}</p>
                <button className='cart-button'>Add To Cart</button>
            </div>

        </>
    )
}

export default Product 