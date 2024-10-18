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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#252342' }}>
        <div className="container-fluid">
          <img
            className="rounded-pill w-10 mx-2"
            src="android-icon-192x192.png"
            alt="My Store Logo"
            width="30"
            height="30"
          />
          <Link to="/" className="navbar-brand">
            My Store
          </Link>

          <div className="d-flex ms-auto">
            <Link to="/cart">
              <button className="btn btn-outline-primary" type="button">
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
