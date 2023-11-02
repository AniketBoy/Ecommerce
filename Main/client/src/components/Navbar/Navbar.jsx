import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='left'>
                    <div className="item">
                        <img src='img/flag.jpg' width={20} />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        INR
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link >
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link >
                    </div>
                </div>
                <div className='center'>
                    <Link className='link' to="/">Ecom Store</Link>
                </div>
                <div className='right'>
                    <div className="item">
                        <Link className='link' to="/products/3">Home</Link >
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">About</Link >
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Contact</Link >
                    </div>
                    <div className="icons">
                        <Link className='link' to="/"><SearchIcon /></Link >
                        <Link className='link' to="/"><PersonIcon /></Link >
                        <Link className='link' to="/"><FavoriteBorderIcon /></Link >
                        <div className="cartIcon">
                            <Link className='link' to="/"><ShoppingCartIcon /></Link >
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar