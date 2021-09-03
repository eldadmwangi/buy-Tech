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

 
function App() {
  const [{}, dispatch] = useStateValue()


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
        <Route path ='/'>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
