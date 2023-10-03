import React, { useState } from 'react';
import { Header } from "./Header.js";
import { Home } from './Home.js';
import {CartPage } from './CartPage.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
const [fullCartHome, setFullCartHome] = useState([]);
let [price, setPrice] = useState(0);


const getLength = (length, fullCart) => {
setFullCartHome(fullCart);
setPrice(result);  
}

const removedFromCart = (element) => {
  setFullCartHome(element);
  setPrice(result);
}

const result = fullCartHome.reduce((total, currentValue) => total = total + currentValue.price,0);

  return (  
  <Router>
    <div className="xl:ml-32 xl:mr-32 xl:mb-14 sm:ml-12 sm:mr-12 ">
      <Header cartLength={fullCartHome.length} price={price}/>
        <Routes>  
          <Route path="/" element={ <Home onAdd={getLength}/>}></Route>
          <Route path="/cart" element={<CartPage  fullCartHome={fullCartHome} onRemove={removedFromCart} price={price} />}></Route>
         </Routes>
    </div>
  </Router>
  );
}

export default App;
