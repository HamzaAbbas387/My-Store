import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Store/Slices/productSlice';
import { fetchProducts } from '../Store/Slices/cardSlice';
import { Link } from 'react-router-dom';

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
    <div className="d-flex row">
      {productStatus === 'loading' ? <p>Loading...</p> : null}
      {products.map((product) => (
        <div key={product.id} className="my-4 mx-2 rounded col-md-2" style={{ width: '19rem', height: '24rem' }}>
          <div className="card">
            <Link to={`/product/${product.id}`}>
              <img style={{ height: '12rem' }} src={product.image} className="card-img-top" alt={product.title} />
            </Link>
            <div className="card-body" style={{ height: '8.5rem' }}>
              <h5 className="card-title">$ {product.price.toFixed(2)}</h5>
              <p className="card-text">{product.title}</p>
            </div>
            <div className="align-self-end ml-auto my-2 mx-2">
              <button onClick={() => dispatch(addToCart(product))} type="button" className="btn btn-primary">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
