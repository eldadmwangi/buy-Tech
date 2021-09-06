import React from 'react'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch]= useStateValue()
    
    return (
        
        <div className ='checkout'>
            <div className ="checkout__left">
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png' alt='checkout banner' />
                <div className='checkout__tittle'>
                    <h5> Hello, {user?.email} </h5>
                <h2> Cart Items</h2>
                {basket.map((item)=>(
                    <CheckoutProduct 
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                    />
                ))}
                
            </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>

           
        </div>
    )
}

export default Checkout
