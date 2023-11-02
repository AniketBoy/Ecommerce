import React from 'react'
import "./FeaturedProducts.scss"
const FeaturedProducts = () => {
    const data = [
        {
            id: 1,
            img1: "img/long sleeve1.jpg",
            img2: "img/long sleeve2.jpg",
            title: "Long-sleeve",
            isNew: true,
            oldPrice: 19,
            newPrice: 17

        }, {
            id: 2,
            img1: "img/short sleeve.jpg",
            img2: "img/lshort sleeve2.jpg",
            title: "Short-sleeve",
            isNew: true,
            oldPrice: 12,
            newPrice: 11

        }, {
            id: 3,
            img1: "img/short pant1.jpg",
            img2: "img/short pant2.jpg",
            title: "Short-Pant",
            isNew: false,
            oldPrice: 22,
            newPrice: 19

        }, {
            id: 4,
            img1: "img/long pant1.jpg",
            img2: "img/long pant2.jpg",
            title: "Long-pant",
            isNew: false,
            oldPrice: 26,
            newPrice: 21

        },
    ]
    return (

        <div className="featuredProducts">

        </div>
    )
}

export default FeaturedProducts