import React from 'react'
import './Home.css';
import Products from './Products';

export default function Home() {
  return (
    <div className='home'>
       <div className="home__container">
        <img className='home_image' src="https://media.istockphoto.com/id/1248734129/vector/one-stop-shop-neon-sign-vector-shoping-design-template-light-banner-night-signboard-nightly.jpg?s=170667a&w=0&k=20&c=LOuHXoi_dxqFzdtUdtqfkk8UisFSVK76wS-kHrgXmXM=" alt="one stop shop" />
       <div className="home_row">
            <Products id ={123423142} title='Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success' price={550}  image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg' rating={5} />

            <Products id={245142627} title="Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, 5 Litre Glass Bowl"
            price={1099}
            rating={4}
            image="https://m.media-amazon.com/images/I/41-v1XOop4L._SY300_SX300_QL70_FMwebp_.jpg"
            />
       </div>

       <div className="home_row">
            <Products id={435271623} title="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3 " 
            price={1299}
            rating={4} 
            image="https://m.media-amazon.com/images/I/61y2VVWcGBL._SY450_.jpg"
            />

            <Products
            id={756746376}
            title="boAt Stone 352 Bluetooth Speaker with 10W RMS Stereo Sound"
            price={1499}
            rating={4}
            image="https://m.media-amazon.com/images/I/61K8FS335JL._SY355_.jpg"
            />
            <Products 
            id={645782543}
            title="Apple iPhone 14 Pro (128 GB) - Deep Purple"
            price={119999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX522_.jpg"
            />
       </div>

       <div className="home_row">
            <Products
            id={647892373}
            title="ASUS ROG Strix G16 (2023) 90WHr Battery, Intel Core i7-13650HX 13th Gen, 16 FHD+ 165Hz, 6GB RTX 4050, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/4-Zone RGB/Green/2.50 Kg), G614JU-N3201WS"
            price={152990}
            rating={5}
            image="https://m.media-amazon.com/images/I/71ap78dgaRL._SY450_.jpg"
            />

       </div>
       </div>

    </div>
  )
}
