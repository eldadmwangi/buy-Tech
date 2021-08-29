import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className ='checkout'>
            <div className ="checkout__left">
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png' alt='checkout banner' />
                <div className='chechout__tittle'>
                <h2>Your shopping basket</h2>
            </div>
            </div>

            <div className='checkout__right'>
                <Subtotal/>
            </div>

           
        </div>
    )
}

export default Checkout
