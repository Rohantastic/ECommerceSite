import React, { createContext } from 'react';
export const CartContext = createContext(null);

const cartElements = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]

const CartProvider = (props) => {
    const cartObject = { cartElements };

    return (
        <CartContext.Provider value={cartObject}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
