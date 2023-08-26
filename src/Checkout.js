import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import Checkoutproduct from './Checkoutproduct';

export default function Checkout() {
    const [{basket}, dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
        <img className='checkout__ad' src="https://paisebachaoindia.com/wp-content/uploads/2016/01/banner.png" alt="amazon prime image" />
        
            <h2 className="checkout__title">
                Shopping Cart
            </h2>

            {basket.map(item =>(
                <Checkoutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>

        </div>
  )
}
