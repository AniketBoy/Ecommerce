import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Catagory</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Watches</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>About</span>
          <span>FAQ</span>
          <span>Help</span>
          <span>Cookies</span>
          <span>Store</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta quos minima assumenda commodi reiciendis, dolor tempora dolorem excepturi minus hic distinctio natus sapiente repellendus alias eveniet nobis nulla nemo.</span>
        </div>
        <div className="item">
          <h1>contact</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta quos minima assumenda commodi reiciendis, dolor tempora dolorem excepturi minus hic distinctio natus sapiente repellendus alias eveniet nobis nulla nemo.</span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>EcomStore</span>
          <span className='copyright'>© Copyright 2023.All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer