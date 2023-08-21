
import React from "react";
import "./Home.css";
import HeaderPage from "../Header/HeaderPage";
import { ProductComp } from "../Product/productcomponent";


function  HomePage () {  
     return (
     <div className="home"> 
     <div> <HeaderPage/> </div>
    <div class="home_container" ></div>
    <img class="home_image" src="https://stylesage.co/blog/content/images/2018/09/AMAZON-1200x537.png" 
    alt="ok"/>
      
      <div className="home_row"> 
    
     <ProductComp/>

     </div>
     </div>
     )
    }
    export default HomePage;