import React from 'react'
import "./Catagories.scss"
import { Link } from "react-router-dom"
const Catagories = () => {
    return (
        <div className="catagories">
            <div className="col">
                <div className="row">
                    <img src="img/long pant1.jpg" alt="" />
                    <button><Link to="/product/1">Men </Link></button>
                </div>
                <div className="row">
                    <img src="img/long pant2.jpg" alt="" />
                    <button><Link to="/product/1=2"> Women </Link></button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="img/long pant1.jpg" alt="" />
                    <button><Link to="/product/3">Children </Link></button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="img/pic1.jpg" alt="" />
                            <button><Link to="/product/1">Hoes </Link></button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="img/pic2.jpg" alt="" />
                            <button><Link to="/product/1">God fearing womens </Link></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="img/pic2.jpg" alt="" />
                        <button><Link to="/product/1">God fearing womens </Link></button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Catagories