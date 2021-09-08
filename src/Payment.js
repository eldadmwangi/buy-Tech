import React,{useState,useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct'
import './payment.css'
import { useStateValue } from './StateProvider'
import {Link,useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from './axios'


function Payment() {

    const [{basket, user}, dispatch]= useStateValue()
    const history =useHistory()

    const stripe =useStripe()
    const elements =useElements()

    const [error, setError] =useState(null)
    const [disabled, setDisabled] =useState(true)
    const [succeeded, setSucceeded] =useState(false)
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] =useState(true)

    useEffect(()=>{
        //generate stripe secrert that allows us to charge and it changes as the basket changes//
        const getClientSecret = async ()=>{
            const response = await axios ({
                method:'post',
                //stripe wants total in currency subunits *100//
                url:`/payments/create?total=${getBasketTotal(basket) *100 } `
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    },[basket])


    const handleSubmit =async (event)=>{
        //stripe functionalities//
        event.preventDefault()
        setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret,
            {payment_method:{
                card:elements.getElement(CardElement)
            } 
        }).then(( {paymentIntent})=>{
                 //payment intent ==paymentConfirmation//
                 setSucceeded(true);
                 setError(null);
                 setProcessing(false);

                 history.replace('/orders')
            })
            
 
    }

    const handleChange =(event)=>{
        setDisabled(event.empty);
        setError(event.error? event.error.message:'')
        
    }

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
                    <p>Kabaru,Ndathi Lane</p>
                    <p>Giathieri 165, Kairi</p>

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
                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange} />

                          <div className='payment__priceContainer'>
                          <CurrencyFormat
                        renderText={(value) => (
                         <h4>Your order total is: {value}</h4>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button className='payment__button' 
            disabled={processing || disabled || succeeded }
            >
                proceed to pay
                <span>{processing? <p>processing</p> :'Buy Now' }</span>
            </button>
                          </div>
                          {error && <div>{error }</div> }
                      </form>

                  </div>

            </div>

            </div>
        </div>
    )
}

export default Payment
