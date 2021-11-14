import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from './about/About'
import Banner from './banner/Banner'
import Products from './products/Products'
import Reviews from './reviews/Reviews'

const Home = () => {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
    return (
        <div>
          <Banner/>
          <Products/>
          <Reviews/>
          <About/>
        </div>
    )
}

export default Home
