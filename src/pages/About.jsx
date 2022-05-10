import { Facebook, Instagram, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <h1 className="header">About Us</h1>
        <span className="info">
            Made by Yassin Laghzaouna. You can check more of my works or you can hire me at &nbsp;
            <a href='https://yassinlaghzaouna.netlify.app/' target="_blank" className='webLink'>Yassin Laghzaouna</a>
        </span>
        <span className="info">
            PS5 DualSense is a fan made website that sells wireless PS5 controllers.
        </span>
        <h1 className="header second">Our Socials</h1>
        <div className="socialsContainer">
            <Facebook fontSize='large' className='icon'/>
            <Twitter fontSize='large' className='icon'/>
            <Instagram fontSize='large' className='icon'/>
            <WhatsApp fontSize='large' className='icon'/>
        </div>

    </div>
  )
}

export default About