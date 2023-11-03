import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
const Card = ({ item }) => {
    console.log("hi")
    return (
        <div className="card">
            <Link to={`/product/${item.id}`} className="link" >
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img1} alt="" className='mainImage' />
                    <img src={item.img2} alt="" className='secondImage' />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.newPrice}</h3>
                </div>
            </Link >
        </div>
    )
}

export default Card