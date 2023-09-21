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
        <img className='checkout__ad' src="https://onestopdiscountshop.ca/cdn/shop/files/Quality_Products_at_a_fraction_of_Retail_Price_1800_x_600_px_5f568c42-1ebe-4484-a0d8-6102905483cc.png?v=1670015967&width=1800" alt="amazon prime image" />
        
            <h1 className="checkout__title">
                Shopping Cart
            </h1>

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
