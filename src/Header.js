import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';

function Header() {
    const [ {basket}, dispatch] = useStateValue()


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
                <div className="header__option">
                    <span className="header__optionLineOne">
                         Guest
                    </span> 
                    <span className="header__optionLineTwo">
                        SignIn
                    </span>

                </div>

                <div className="header__option">
                <span className="header__optionLineOne">
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
