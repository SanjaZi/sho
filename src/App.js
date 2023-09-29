import React, { useState } from 'react';
import { Header } from "./Header.js";
import { Home } from './Home.js';
import {CartPage } from './CartPage.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {

const [cartLength, setCartLength] = useState(0);
const [fullCartHome, setFullCartHome] = useState([]);

const getLength = (length, fullCart) => {
  setCartLength(length);
  setFullCartHome(fullCart);
}


  return (  
  <Router>
    <div className=" ml-32 mr-32 mb-14 ">
      <Header cartLength={cartLength}/>
        <Routes>  
          <Route path="/" element={ <Home onAdd={getLength}/>}></Route>
          <Route path="/cart" element={<CartPage  fullCartHome={fullCartHome} />}></Route>
         </Routes>
    </div>
  </Router>
  );
}

export default App;
