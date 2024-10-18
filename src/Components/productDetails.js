// src/components/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { addToCart } from '../Store/Slices/productSlice';

const ProductDetails = () => {
    
  const dispatch = useDispatch();

  const { id } = useParams(); // Get the product id from the URL
  const products = useSelector((state) => state.products.items); // Get the list of products from the Redux store

  // Find the product based on the id from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>; // If the product doesn't exist, show an error message
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>Price: ${product.price}</h4>
          <button className="btn btn-primary mt-3" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
