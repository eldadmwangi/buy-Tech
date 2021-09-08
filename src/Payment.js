import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './payment.css'
import { useStateValue } from './StateProvider'
import {Link} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

function Payment() {

    const [{basket, user}, dispatch]= useStateValue()

    const stripe =useStripe()
    const elements =useElements

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h3> checkout (<Link to ='/checkout'>{basket?.length} items 
                </Link>  )</h3>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h4>Delivery Adress</h4>
                </div>
                <div className='payment__adress'>
                    <p>{user?.email}</p>
                    <p>Ndathi Lane</p>
                    <p>Giathieri 165, KR </p>

                </div>

            </div>

              <div className='payment__section'>
                  <div className='payment__title'>
                      <h3> Products Review and delivery</h3>
                  </div>
                  <div className='payment__items'>
                      {basket.map(item =>(
                          <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                          rating={item.rating}
                          />
                      )) }

                  </div>

            </div>

              <div className='payment__section'>
                  <div className=''>
                      <h3>Payment method</h3>
                  </div>

                  <div className='payment__details' >
                      <form>
                          <CardElement/>
                      </form>

                  </div>

            </div>

            </div>
        </div>
    )
}

export default Payment
