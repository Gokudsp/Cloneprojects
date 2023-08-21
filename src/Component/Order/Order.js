import React from 'react'
import "./Order.css";
import CardProduct from '../Card/CardProduct';
// import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';

function Order({ order }) { 

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="order">
            <h2>Order</h2>
            
            <p className="order_id">
                <small>{Order.id}</small>
            </p>
            <p>Not showing</p>

            {order.data.basket?.map(item => (
                <CardProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}

            {/* <CurrencyFormat */}
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            {/* /> */}
        </div>
    )
}

export default Order
