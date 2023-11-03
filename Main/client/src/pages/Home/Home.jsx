import Slider from '../../components/Slider/Slider'
import React from 'react'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Catagories from '../../components/Catagories/Catagories'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Catagories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home