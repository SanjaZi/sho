import React, { useState, useEffect } from 'react';
import { Header } from "./Header.js";
import { Main } from './Main.js';
import {CartPage } from './CartPage.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const [fullCartHome, setFullCartHome] = useState(storedCartItems);
const [price, setPrice] = useState(0);

useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(fullCartHome));
}, [fullCartHome]);


const onAddRemove = (fullCart) => {
  setFullCartHome(fullCart);
  const totalPrice = fullCart.reduce((total, currentValue) => total + currentValue.price, 0);
  setPrice(totalPrice);
}

  return (  
  <Router>
    <div className="xl:ml-32 xl:mr-32 sm:ml-12 sm:mr-12 dark:bg-gray-900 ">
      <Header cartLength={fullCartHome.length} price={price}/>
        <Routes>  
          <Route path="/" element={ <Main onAdd={onAddRemove} fullCartHome={fullCartHome} />}></Route>
          <Route path="/cart" element={<CartPage  fullCartHome={fullCartHome} onRemove={onAddRemove} price={price}  />}></Route>
         </Routes>
    </div>
  </Router>
  );
}

export default App;