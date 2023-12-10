import React, { useState } from 'react'
import "./Utils.scss"
import parse from "html-react-parser"
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addCartThunk } from '../redux/action/cart-action';

const Utils = (props) => {
  console.log(props);
  return (
    <div>Utils</div>
  )
}







export const Container = ({children}) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}

export default (Utils)