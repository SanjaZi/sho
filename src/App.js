import React, { useState, useEffect } from 'react';
import { Header } from "./Header.js";
import { Home } from './Home.js';
import {CartPage } from './CartPage.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const [fullCartHome, setFullCartHome] = useState(storedCartItems);
const [price, setPrice] = useState(0);

useEffect(() => {
  // Save cart items to localStorage whenever fullCartHome changes
  localStorage.setItem('cartItems', JSON.stringify(fullCartHome));
}, [fullCartHome]);



const getLength = (fullCart, cartFromHome) => {
  setFullCartHome(fullCart);
  const totalPrice = fullCart.reduce((total, currentValue) => total + currentValue.price, 0);
  setPrice(totalPrice);

}


const removedFromCart = (element) => {
  setFullCartHome(element);
  const totalPrice = element.reduce((total, currentValue) => total + currentValue.price, 0);
  setPrice(totalPrice);
  
}


  return (  
  <Router>
    <div className="xl:ml-32 xl:mr-32 xl:mb-14 sm:ml-12 sm:mr-12 ">
      <Header cartLength={fullCartHome.length} price={price}/>
        <Routes>  
          <Route path="/" element={ <Home onAdd={getLength} fullCartHome={fullCartHome} />}></Route>
          <Route path="/cart" element={<CartPage  fullCartHome={fullCartHome} onRemove={removedFromCart} price={price} />}></Route>
         </Routes>
    </div>
  </Router>
  );
}

export default App;