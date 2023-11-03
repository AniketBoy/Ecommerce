import React from 'react'
import "./Products.scss"
import { useParams } from "react-router-dom"
import List from '../../components/List/List'

const Products = () => {
  const param = useParams();
  // console.log(param)
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h1>Product catagories</h1>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={1} />
            <label htmlFor="2">Watches</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={1} />
            <label htmlFor="3">Dress</label>
          </div>
        </div>
        <div className="filterItem">
          <h1>Filter by price</h1>
          <div className="inputItem">
            <input type="checkbox" id="4" value={1} />
            <label htmlFor="4">100</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={1} />
            <label htmlFor="5">500</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={1} />
            <label htmlFor="6">1000</label>
          </div>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100} />
            <span>100</span>
          </div>
        </div>
        <div className="filterItem">
          <h1>Sort by</h1>
          <div className="inputItem">
            <input type="radio" id="dec" value="dec" name='price' />
            <label htmlFor="dec">price(Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="inc" value="inc" name='price' />
            <label htmlFor="inc">price(Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="catagoryImage">
          <img src="/img/long sleeve2.jpg" alt="asda"  width={60}/>
        </div>
        <List />
      </div>
    </div>
  )
}

export default Products