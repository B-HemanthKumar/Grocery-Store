import React from 'react'
import Banner from '../components/Banner'
import Dev from '../components/Dev'
import Footer from '../components/Footer'
import HappyShop from '../components/HappyShop'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Home = () => {
  return ( 
  <>
    <Dev/>
    <Navbar/>
    <Banner/>
    <HappyShop/>
    <Products/>
    <Newsletter/>
    <Footer/>
    
  </>
  )
}

export default Home