import React from 'react'

const Home = () => {
  return (
    <div className='homePage'>

        <div className="left">
            <div className="infoContainer">
                <h1>Squid Game </h1>
                <h1> PS5 Dualshock 5</h1>
                <span className='info'>Wireless Controller For Playstation 5 </span>
                <span className='price'>$19.99</span>
                <button className='btn'>Buy Now</button>
                <div className="line"></div>
            </div>
        </div>

        <div className="right">
            <img src="/pictures/sg.png" alt="controller" />
        </div>

    </div>
  )
}

export default Home