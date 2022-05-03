import { Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)

    const [menu, setMenu] = useState(false)

    return (
        <div className='navbar'>

            <div className="left">
                <NavLink to="/cart">
                    <Badge overlap="rectangular" color="secondary" badgeContent={quantity} style={{color: "white"}}  >
                        <ShoppingCart className='shoppingCartIcon' fontSize='large' />
                    </Badge>
                </NavLink>
            </div>

            <div className="right">
                <NavLink to="/" style={{ marginLeft: "0px" }}>HOME</NavLink>
                <NavLink to="/shop">SHOP</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/news">NEWS</NavLink>
            </div>

            <div className="mobileMenuIcon" onClick={() => setMenu(!menu)}>
                <div className={"line " + (menu ? "active" : "")}></div>
            </div>

            <div className="holder">
                <div className={"mobileMenu " + (menu ? "active" : "")}>
                    <NavLink onClick={() => setMenu(!menu)} to="/">HOME</NavLink>
                    <NavLink onClick={() => setMenu(!menu)} to="/shop">SHOP</NavLink>
                    <NavLink onClick={() => setMenu(!menu)} to="/about">ABOUT</NavLink>
                    <NavLink onClick={() => setMenu(!menu)} to="/news">NEWS</NavLink>
                </div>
            </div>


        </div>
    )
}

export default Navbar