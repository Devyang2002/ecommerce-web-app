import React from 'react';
import './Products.css';
import { useStateValue } from './StateProvider';

export default function Products({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addtocart = () => {
            dispatch({
                type: "ADD_TO_CART",
                item:{
                    id:id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });
    };

  return (
    <div id='rows' className='product'>
    <div className="product__info">
      <p>{title}</p>
      <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
      </p> 
    <div className="product_rating">
        {Array(rating).fill().map((_,i) =>(
        <p>⭐</p>
        ))}
    </div>
    </div>
    <img src={image} alt="The lean startup image" />

    <button onClick={addtocart}> Add to cart</button>
  </div>
  )
}


