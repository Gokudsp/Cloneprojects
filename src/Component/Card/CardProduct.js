import React from 'react';
import "./Cardproduct.css";
import { useStateValue } from '../../StateProvider';

function CardProduct({ id, image, title, price, rating,hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
  

    const removeFromBasket = () => {
        
       
        dispatch({
            type: "Remove From Basket",
            id: id,
        })
    }

    return (
        <div className='CardProduct'>
            <img className='CardProduct_image' src={image} />

            <div className='CardProduct_info'>
                <p className='CardProduct_title'>{title}</p>
                <p className="CardProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CardProduct_rating">

                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            
                {!hideButton && (
                    <button onClick={() => removeFromBasket ({id})}>Remove from Basket</button>
                )}
            
            </div>
        </div>
    )
}

export default CardProduct