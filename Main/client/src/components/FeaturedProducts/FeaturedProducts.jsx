import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'
const FeaturedProducts = ({ type }) => {
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
            img2: "img/short sleeve2.jpg",
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
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque natus, repellendus voluptatem odio, libero suscipit commodi recusandae nobis enim possimus assumenda consequatur, praesentium adipisci veritatis minus tenetur error? Nesciunt, delectus.
                    Mollitia ab ex pariatur ullam qui inventore accusantium officia? Sit ad iusto in, dolor aperiam nam minima magni aliquam voluptates inventore nesciunt ea id alias corrupti laudantium ullam itaque suscipit.</p>

            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts