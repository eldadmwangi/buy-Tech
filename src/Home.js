import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" alt="homeimage" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"/>
            </div>
            
            <div className="home__row">
                <Product title='This is a macbook pro 13,3 2014' rating={5} price={250} image='https://cdn.pixabay.com/photo/2016/11/22/21/26/notebook-1850613__340.jpg' />   
               <Product title='Nintendo' rating={4} price={290} image="https://assets.nintendo.com/image/upload/ncom/en_US/switch/split-cta-system-mobile"  />
            </div>

            <div className="home__row">
            <Product title='Samsung AU65 LED CURVED' rating={5} price={1379} image='https://media.istockphoto.com/photos/samsung-led-tv-picture-id458985897?k=20&m=458985897&s=612x612&w=0&h=GfTktGV-d0Peit_46Hpmj8Wt1lHfnt166i5ak4mEq1U=' />
            <Product title='HP 27es Display Monitor' rating={4} price={285} image='https://support.hp.com/doc-images/930/c05078345.jpg'  />
            </div>

            <div className="home__row">
            <Product  title='Playstation 5(PS5)' rating={4} price={620} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLx4bFB2mhTAtpbSkzzKkDW1uJpVWqqDkvA&usqp=CAU'  />
            </div>

        </div>
    )
}

export default Home
