import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Cart from "./Components/cartPage";
import React from 'react';
import ProductDetails from './Components/productDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Footer from './Components/footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route path="/cart" element={<Cart />} />  
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <ToastContainer />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;