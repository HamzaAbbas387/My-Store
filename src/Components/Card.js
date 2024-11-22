import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/Slices/productSlice';
import { fetchProducts } from '../Store/Slices/cardSlice';
import { Link } from 'react-router-dom'; 
import { toast } from 'react-toastify';

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div>
    <div className="d-flex row">

      <section style={{ padding: '2rem', backgroundColor: '#f8f9fa', textAlign: 'center', marginTop: '60px' }}>
        <h2>Find top-quality products at great prices – shop now!</h2>
      </section>


      {productStatus === 'loading' ? <p>Loading...</p> : null}
      {products.map((product) => (
        <div className="my-4 mx-2 rounded col-md-2 bg-transparent" style={{ width: '19rem', height: '24rem' }} key={product.id}>
          <div className="card">
            <Link to={`/product/${product.id}`}>
              <img style={{ height: '12rem' }} src={product.image} className="card-img-top" alt={product.title} />
            </Link>
            <div className="card-body" style={{ height: '8.5rem' }}>
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <h5 className="card-title">$ {product.price}</h5>
              </Link>
              <p className="card-text">{product.title}</p>
            </div>
            <div className="align-self-end ml-auto my-2">
              <button onClick={() => handleAddToCart(product)} type="button" className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div>
    <footer className="text-light py-3 mt-5 fw-bold" style={{backgroundColor: '#060c42'}}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex flex-column flex-md-row gap-3 mb-2 mb-md-0">
          <a href="#privacy" className="text-decoration-none text-light">
            Privacy Policy
          </a>
          <a href="#refund" className="text-decoration-none text-light">
            Refund Policy
          </a>
        </div>
        <p className="mb-0">My Store</p>
        <p className="mb-0">© 2024 My Store</p>
      </div>
    </footer>
    </div>
    </div>
  );
};

export default Card;



