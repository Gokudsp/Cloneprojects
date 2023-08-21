import React from "react";
import "./Product.css";

function ProductPage({ id, title, image, price, rating }) {
  return (

    
    <div >

      <div className="product">

        <div className="product_info">
          <p> {title}</p>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong></p>

          <div className="product_rating">
            <p> {rating}</p>
            <p> ⭐</p>
            <p> ⭐</p>

            <div className="product > img">
              <img src={image} alt="">
              </img>


              <div className="product > button  ">
                <button>Add to Basket</button> </div>
            </div>


          </div>
        </div>
      </div>


    </div>
  )
}
export default ProductPage;





{/* <p className="product_price">
            <small>₹</small>
            <strong>20</strong></p> */}
{/* <div className="product">
        <div className="product_info"><p>Eversilver fork</p>
        <p className="product_price">
          <small>₹</small>
          <strong>2</strong></p>
          <div className="product_rating">
            <p>⭐ </p><p>⭐ </p><p>⭐ </p> </div></div>
            <img src="https://i.pinimg.com/originals/35/66/9c/35669cd7641b5319812c6733475fbcd9.jpg" alt="" />
          <button>Add to Basket</button></div>
        
        
      </div>   */}