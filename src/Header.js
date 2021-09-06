import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import  {auth} from './firebaseconfig2';
import { getAuth, signOut } from "firebase/auth";


 
function Header() {
    const [ {basket,user}, dispatch] = useStateValue()

    const handleAuthentication =()=>{
     if(user){
         signOut(auth)
     }

     console.log('hey',user)
     }


    return (
        <div className="header">
            <Link to='/'>
            <img className ="header__logo"  alt="buytech2" src="buytech2.png" />
            </Link> 

            <div className="header__search">
                <input className ="header__searchInput" type="text" placeholder="What are you looking for ..?" />
                <SearchIcon className= "header__searchIcon"/>
            </div>


            <div className ="header__nav">
                <Link to={!user && '/Login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">
                         Guest
                    </span> 
                    
                    <span className="header__optionLineTwo">
                        {user? 'signOut':'signIn'}
                    </span>
                </div>
                </Link>

                <div className="header__option">
                <span className="header__opti onLineOne">
                        Returns
                    </span> 
                    <span className="header__optionLineTwo">
                        &Orders
                    </span>

                </div>

                <div className ="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span> 
                    <span className="header__optionLineTwo">
                        Prime
                    </span>

                </div>
                <div className="header__optionBasket">
                <Link to ='/checkout'>
                    <ShoppingCartIcon/>
                    </Link>
                {/* optional chaining ? */}
                    <span className= "header__optionLineTwo header__basketCount"> {basket?.length} </span>

                </div>
            </div>


        </div>
    )
}

export default Header
