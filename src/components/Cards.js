import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        
        <div className='cards'>
        <h1>Check out all the Services</h1>
        <div className="cards__container">
        <div className="cards__wrapper">
         <ul className="cards__items">

         <CardItem
             src='images/WhatsApp Image 2021-04-30 at 1.54.55 PM.jpeg'
         text='This is the front look of ATM.We are providing 24 hours services.'
             label='Adventure'
             path='/services'
         />
            <CardItem
             src='images/WhatsApp Image 2021-04-30 at 1.54.55 PM (1).jpeg'
         text='All Bank Cards accepted.'
             label='Adventure'
             path='/services'
         />

         </ul>

        </div>
        </div>

        </div>

      
    )
}
export default Cards;