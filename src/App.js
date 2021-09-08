import React, {useEffect} from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
// import {auth} from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import  {auth} from './firebaseconfig2';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import Stripe from 'stripe';


// var stripe = Stripe('pk_test_51JXAamL4KDfhVlMyWX62tfo04LaLr1lc7bV78ko99bTDAavYWWD36Ino8JymWc16S2RllE4WxoSZ2c9ZKH1I5At800IO1H2cjy');

const stripePromise = loadStripe('pk_test_51JXAamL4KDfhVlMyWX62tfo04LaLr1lc7bV78ko99bTDAavYWWD36Ino8JymWc16S2RllE4WxoSZ2c9ZKH1I5At800IO1H2cjy');

 
function App() {
  const [{}, dispatch] = useStateValue()
  // console.log('so here is ', loadStripe)


  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      // console.log('the user logged in is', user)
      if(user) {
        dispatch({
          type:'SET_USER',
          user:user
        })
      } else {
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router> 
    <div className="app">
      <Header/>
      <Switch>
      <Route path ='/Login'>
          <Login/>
        </Route>
        <Route path ='/Checkout'>
          <Checkout/>
        </Route>
        <Route path='/Payment'>
          <Elements stripe={stripePromise} >
            <Payment/>
            </Elements>
        </Route>
        <Route path ='/'>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
