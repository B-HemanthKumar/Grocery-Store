import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductCard from './pages/Productcard';
import ProductList from './pages/ProductList';


const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/productcard" element={<ProductCard/>} />
        </Routes>
       
        {/* <Route path="/women" element={<Women />} /> */}
    </>
  )
}

export default AllRoutes