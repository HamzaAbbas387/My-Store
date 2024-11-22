import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../Store/Slices/productSlice';

const Navbar = () => {
  const { product, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [product, dispatch]);

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to right, rgb(11, 11, 71), rgb(40, 40, 141), rgb(13, 13, 99), rgb(21, 21, 78))',
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center flex-shrink-1">
            <Link to="/" className="navbar-brand fw-bold fs-5" style={{ fontFamily: 'revert-layer' }}>
              My Store
            </Link>
          </div>

          <div className="d-flex gap-3 align-items-center flex-grow-1 justify-content-center">
            <Link to="/" className="text-light small">Home</Link>
            <Link to="/" className="text-light small">About</Link>
            <Link to="/" className="text-light small">Contact</Link>
          </div>

          <div className="d-flex align-items-center flex-shrink-1">
            <Link to="/cart">
              <button className="navbar-button" type="button">
                Cart ({totalQuantity})
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
