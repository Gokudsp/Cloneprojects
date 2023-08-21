

import React from 'react';
import "./Total.css";
// import CurrencyFormat from "react-currency-format";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';


function Subtotal() {
    
    const navigate = useNavigate();
    const [{ basket }, dispatch ] = useStateValue();

    var getBasketTotal = '';
    
    for(var i=0; i<basket.length; i++) {
        getBasketTotal += basket[i].price;
    }

    return (
        <div className="subtotal">
            {/* <CurrencyFormat */}
                renderText={(value) => (
                <>
                    <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
                    <small className="subtotal_gift">
                      <input type="checkbox" /> This order contain a gift
                  </small>
                </>
                )}
                 decimalScale={2}
                value ={getBasketTotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            {/* /> */}
            
            <button className='subtotal_button' onClick={e => navigate ('/Payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
