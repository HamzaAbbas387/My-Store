import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Cart from "./Components/cartPage";
import React, {useEffect} from 'react';

function App() {
  
  return (

  <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Card/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
