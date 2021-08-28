import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home" >
            <div className="home__container">
                <img className="home__image" alt="homeimage" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"/>
            </div>
            
            <div className="home__row">
                <Product/>
                <Product/>

            </div>

            <div className="home__row">
               

            </div>

            <div className="home__row">
                

            </div>

        </div>
    )
}

export default Home
