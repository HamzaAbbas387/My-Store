import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../Store/Slices/productSlice';
// import cart from './cartPage'

const Navbar = () => {

  const { product, totalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [product])
  
  return (
    <div>
        <nav className = "navbar navbar-expand-lg navbar-dark d-flex" style={{background: "#252342"}}>
  <div className="container-fluid">
  <img className='rounded-pill w-10 mx-2' src="android-icon-192x192.png" alt="Bootstrap" width="30" height="30" style={{height:'30px'}}/>
    <Link to="/" className="navbar-brand" href="#">My Store</Link>
    
    <Link to="/cart"><button className="btn btn-outline-primary justify-content-end" type="submit">Cart({totalQuantity})</button></Link>


  </div>
</nav>
    </div>
    
  )
}

export default Navbar