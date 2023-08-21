import React from "react";
import { Routes, Route } from "react-router-dom";
import CardPage from "./Component/Card/CardPage";
import HomePage from "./Component/Home/HomePage";
import HeaderPage from "./Component/Header/HeaderPage";
import ProductPage from "./Component/Product/ProductPage";
import Example from "./Component/ex";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductComp } from "./Component/Product/productcomponent";
import LoginPage from "./Login/LoginPage";
 import Orders from "./Component/Order/Orders";
import Gokul from "./Component/Payment/Gokul";

export default function App() {


  return (
    <div> 
  
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/ex" element={<Example/>}/>
          <Route path="card" element={<CardPage />}/>
          <Route path="header" element={<HeaderPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="/ragul" element={<ProductComp/>}/>
          <Route path="Card" element={<CardPage />}  />
          <Route path="Login" element={<LoginPage />} />
           <Route path="Order" element={<Orders />}/> 
           <Route path="Payment" element={< Gokul />} />
             {/* <Route path="/"  element={<h1>welcome </h1>}/> */}
          
          
          
       
      </Routes>
      </div>
  
  );
}

