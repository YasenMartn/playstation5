import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='homePage'>

        <div className="left">
            <div className="infoContainer">
                <h1 className='title'>DualSense Wireless</h1>
                <h1 className='title'>PS5 Controller</h1>
                <span className='info'>Wireless Controller For Playstation 5 </span>
                <span className='price'>$79.99</span>
                <Link to="/shop" className='btn'>Buy Now</Link>
            </div>
        </div>

        <div className="right">
            <img src="/pictures/whiteps5.png" alt="controller" />
        </div>

    </div>
  )
}

export default Home