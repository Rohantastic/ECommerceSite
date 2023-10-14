import React from 'react';
import Product from './Product';
import './ProductArr.css';

const ProductArr = () => {
  const productsArr = [
    {
      id:1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id:2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    { 
      id:3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id:4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  console.log("inside productsarr");
  return (
    <>
      <div className='music-container'>
        <h1 id="music-text">Music</h1>
        <div className='music-content'>
          {productsArr.map((element, index) => (
            <Product
              id={element.id}
              title={element.title}
              price={element.price}
              imageUrl={element.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductArr;
