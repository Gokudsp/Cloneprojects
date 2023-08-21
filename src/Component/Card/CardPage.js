import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CardProduct from "./CardProduct";
import Subtotal from "./Total";

function CardPage() { 

  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="CardPage">
      <div className="CardPage_left">
      <Link to="/home"> 
        <img
          className="CardPage_add"
          src="https://stylesage.co/blog/content/images/2018/09/AMAZON-1200x537.png"
          alt=""
        />
        </Link>
       
        <div>
          
          <h2 className="CardPage_title"> Your shopping Basket </h2>
          <Subtotal />

          {basket.map(item => (

            <CardProduct
            
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}

            />
            
            
          ))}
          
           </div>

        </div>

       </div>
    );
   }

   export default CardPage;