import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image}  alt="checkoutproduct"/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title}</p>
                <p className="checkoutPrice__price"> 
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
                <div className="checkoutProduct__rating"> 
                {Array(rating).fill().map((_, i)=>(
                    <p>⭐</p>
                ))}
                </div>
                <button onClick={removeFromBasket}>  Remove from Basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
