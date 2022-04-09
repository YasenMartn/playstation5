import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div className='navbar'>

            <div className="left">
                <div className="logoContainer">
                    <img src="/pictures/ps.png" alt="logo" />
                </div>
            </div>


            <div className="right">
                <NavLink to="/" style={{marginLeft: "0px"}}>HOME</NavLink>
                <NavLink to="/games">GAMES</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/news">NEWS</NavLink>
            </div>

            <div className="mobileMenuIcon" onClick={() => setMenu(!menu)}>
                <div className={"line " + (menu ? "active" : "")}></div>
            </div>

            <div className={"mobileMenu " + (menu ? "active" : "")}>
                <NavLink onClick={() => setMenu(!menu)} to="/">HOME</NavLink>
                <NavLink onClick={() => setMenu(!menu)} to="/games">GAMES</NavLink>
                <NavLink onClick={() => setMenu(!menu)} to="/about">ABOUT</NavLink>
                <NavLink onClick={() => setMenu(!menu)} to="/news">NEWS</NavLink>
            </div>

        </div>
    )
}

export default Navbar