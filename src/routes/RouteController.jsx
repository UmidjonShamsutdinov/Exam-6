import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleCategory from './single-category/SingleCategory'
import SingleProduct from './single-product/SingleProduct'
import Cart from '../components/cart/Cart.jsx'
import Like from '../components/like/Like.jsx'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:type' element={<Home/>}/>
        <Route path='/cart/:noneed' element={<Cart/>}/>
        <Route path='/like/:noneed' element={<Like/>}/>
        <Route path='/single-category/:categoryName' element={<SingleCategory/>}/>
        <Route path='/single-product/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default RouteController