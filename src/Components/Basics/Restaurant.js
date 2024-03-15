import React from 'react';
import './Style.css';

const Restaurant = () => {
  return (
    <>
      <div className='card-container'>
         <div className='card'>
            <div className='card-body'>
               <span className='card-number card-circle subtle'>1</span>
               <span className='card-author subtle'>Breakfast</span>
               <h2 className='card-title'>Maggi</h2>
               <span className='card-description subtl'>
                  I love Maggi, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum et eius totam excepturi nisi.
               </span>
               <div className='card-read'>Read</div>
            </div>
            <img src="" alt="image" className='card-media' />

            <span className='card-tag subtle'>Order Now</span>
         </div>
      </div>
    </>
  )
}

export default Restaurant;
