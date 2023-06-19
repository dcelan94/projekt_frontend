import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      
      <Footer />
      
    </div>
    
  )
}

export default Home