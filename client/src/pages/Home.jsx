import React from 'react'
import Banner from '../components/Banner'
import Dev from '../components/Dev'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Home = () => {
  return ( 
  <>
    <Dev/>
    <Navbar/>
    <Banner/>
    <Products/>
    <Newsletter/>
    <Footer/>
  </>
  )
}

export default Home