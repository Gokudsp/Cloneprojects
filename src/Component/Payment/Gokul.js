import React from "react";
import { useStateValue } from "../../StateProvider";
import CardProduct from "../Card/CardProduct";
// import "./Pay.css";
import { Link } from "react-router-dom";
import HeaderPage from "../Header/HeaderPage";

  function Gokul () {
    const [{basket,user},dispatch] = useStateValue();
    return(
     
      <div className="payment"> 
    
      <div className="payment-container">
        <HeaderPage />
        <h1>

        HeaderPage (
          <Link to ="/HeaderPage"> {basket?.length} items</Link>
        )
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3> Deliver Address</h3> 
            </div>
            <div className="payment-address">
              <p> {user?.email}</p>
              <p> 53/1 salem lan</p>
              <p> salem, mettur</p>
               </div>
           </div>
           <div className="payment-section">
          <div className="payment-title">
            <h3> Review item and Deliver</h3> 
            </div>
            <div className="payment-item">
              {basket.map(item =>{
                  <CardProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
    
                />
              })}
               </div>
         </div>

          {/* payment select */}
          <div className="payment-section">
          <div className="payment-title">
            <h3> Payment methods</h3> 
            </div>
            </div>

       </div>
       </div>
    )
 }

 export default Gokul