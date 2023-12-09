import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleCategory from './single-category/SingleCategory'
import SingleProduct from './single-product/SingleProduct'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single-category/:categoryName' element={<SingleCategory/>}/>
        <Route path='/single-product/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default RouteController