
// import Product from  "../Product/ProductPage";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
 import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';




function HeaderPage() {
  const [{ basket , user , dispatch}] = useStateValue();
    
  return (
    <div className="header">
       <Link to="/"> 
      <img class="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="">

      </img>
      </Link>

       
      {/* <div className="home"> 
     <img className=" home_image" src="https://stylesage.co/blog/content/images/2018/09/AMAZON-1200x537.png" 
     alt="ok"></img>
     
     </div>  */}
    <div className="nav-search">
          <select class="select-search">
            <option>All</option>
            <option>All Categories</option>
            <option>Amazon Devices</option>
          </select>
          <input type="text" placeholder="Search Amazon" class="search-input"/>
           <div className="search-icon"> 
            <div> @</div> 
          </div>
        </div>
      <div className="home_row">
      
        <div className="header_nav"></div>
        <Link to={!user &&"/Login"}>  
          <div  className="header_option">
          
          <div className="header_optionLineOne" >{!user ?'Gust' :user.email}</div>
          <div className="header_optionLineTwo" >{user ?'sing Out':'sing In'}</div>
         
          </div>
          </Link>
        </div>



        <div className="header_option">
        <Link to="/home">  
          <div className="header_optionLineOne" style={{color:"white"}}>Returns</div>
          <div className="header_optionLineTwo" style={{color:"white"}}> & Order</div>
          </Link>
          </div>

          <div className="header_option">
          <Link to="/Card"> 
          <div className="header_optionLineOne" style={{color:"white"}}>Your</div>
          <div className="header_optionLineTwo" style={{color:"white"}}> & Order</div>
          </Link>
          </div>

      
          <div className="header_optionBasket">
          <Link to="/Card"> 
          <ShoppingBasketIcon style={{fontSize:"40px",color:"white"}} />
          <div className="header_optionLineTwo header_basketCount"> 
          {basket?.length};
         
          </div>
          </Link>
      </div>
      

      {/* <div> < Product /></div> */}
      
    </div>
    

   
   
  );
}
export default HeaderPage;