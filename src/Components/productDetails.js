import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { addToCart } from '../Store/Slices/productSlice';

const ProductDetails = () => {

  const dispatch = useDispatch();

  const { id } = useParams(); 
  const products = useSelector((state) => state.products.items);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
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
