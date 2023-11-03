import Card from '../Card/Card'
import React from 'react'
import "./List.scss"



const List = () => {
    const data = [
        {
            id: 1,
            img1: "/img/long sleeve1.jpg",
            img2: "/img/long sleeve2.jpg",
            title: "Long-sleeve",
            isNew: true,
            oldPrice: 19,
            newPrice: 17

        }, {
            id: 2,
            img1: "/img/short sleeve.jpg",
            img2: "/img/short sleeve2.jpg",
            title: "Short-sleeve",
            isNew: true,
            oldPrice: 12,
            newPrice: 11

        }, {
            id: 3,
            img1: "/img/short pant1.jpg",
            img2: "/img/short pant2.jpg",
            title: "Short-Pant",
            isNew: false,
            oldPrice: 22,
            newPrice: 19

        }, {
            id: 4,
            img1: "/img/long pant1.jpg",
            img2: "/img/long pant2.jpg",
            title: "Long-pant",
            isNew: false,
            oldPrice: 26,
            newPrice: 21

        },
    ]
    return (
        <>
        {/* {
            JSON.stringify(data)
        } */}
        <div className="list">
            {
                data?.map(item => <Card item={item} key={item.id} />)
            }
        </div>
        </>
    )
}

export default List