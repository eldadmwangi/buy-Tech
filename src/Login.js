import { Link, useHistory } from 'react-router-dom'
import React, {useState} from 'react'
import './login.css'
import  {auth} from './firebaseconfig2';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')


    const signIn = (e) =>{
       e.preventDefault()
       signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    if(user){
        history.push('/checkout')
    }
       })
       .catch(error => alert(error.message))


    }

    const register = (e) =>{
        e.preventDefault()
        // console.log("HAPA called", createUserWithEmailAndPassword)
        // return console.log("HAPA auth", auth)
                    //if the user is authenticated, then an account is created and the history.push takes us to the homepage//
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
            // create a user with email and password
            // console.log("HAPA res", auth)
        })
        .catch(error => alert(error.message))
    }

 

    return (
        <div className='login'>
            <Link to ="/">
            <img className="login__logo"  src='http://localhost:3000/buytech2.png'/>
            </Link>
            <div className="login__container">
                <h2>SignIn</h2>
                <form>
                    <h5>Email</h5>
                    <input type='email' placeholder="enter email" value ={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' placeholder="enter email" value={password} onChange={e=>setPassword(e.target.value)} />

                    <button className="login__signInButton" type='submit' onClick={signIn} >Sign In</button>
                </form>
                <p>By signing in you accept buy-tech terms and conditions</p>
                <button className="login__registerButton" type='submit' onClick={register} >Register account</button>

            </div>
        </div>
    )
}

export default Login


// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPZUM1hFeoIaDXp5A8Fuy8cXIbfIRPStz9WUWbJN3TgMwKWAB3FRRuzaxy1Kjze2gTSw&usqp=CAU