import React from 'react';
import { cartElements } from '../dummy_data/cartElements';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useParams } from 'react-router-dom';
import "./Product_details.css";

const Product_details = () => {
  const { id } = useParams();
  const specificProduct = cartElements.find((product) => product.id === parseInt(id));

  console.log("specificProduct", specificProduct);

  return (
    <>
      <Header />
      <div className='product-details-container'>
        
        {specificProduct && (
          <div className='product-details-container-inside'>
            <h2 className='product-details-container-h2'>{specificProduct.title}</h2>
            <p className='product-details-container-p'>Price: ${specificProduct.price}</p>
            <img className='product-details-container-img'src={specificProduct.imageUrl} alt={specificProduct.title} />
            <div className="product-details-container-inside-description">
              <h4>Description:</h4>
              <p>
                {specificProduct.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product_details;
