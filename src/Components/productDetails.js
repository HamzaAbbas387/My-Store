import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { addToCart } from '../Store/Slices/productSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  const { id } = useParams(); 
  const products = useSelector((state) => state.products.items);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2 className='text-light'>{product.title}</h2>
          <p className='text-light'>{product.description}</p>
          <h4 className='text-light'>Price: ${product.price}</h4>
          <button onClick={() => handleAddToCart(product)} type="button" className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
