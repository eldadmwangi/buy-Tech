import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import './login.css'
import  {auth} from './firebaseconfig2';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const signIn = (e) =>{
       e.preventDefault()

    }

    const register = (e) =>{
        e.preventDefault()
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(({auth})=>{
            // create a user with email and password
            console.log('hey')
        })
        .catch(error => alert(error.message))

    }



    return (
        <div className='login'>
            <Link to ="/">
            <img className="login__logo"  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPZUM1hFeoIaDXp5A8Fuy8cXIbfIRPStz9WUWbJN3TgMwKWAB3FRRuzaxy1Kjze2gTSw&usqp=CAU'/>
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
