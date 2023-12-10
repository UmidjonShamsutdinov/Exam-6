import React, { useState } from 'react'
import "./Utils.scss"
import parse from "html-react-parser"
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Utils = () => {
  return (
    <div>Utils</div>
  )
}




export const Card = ({product}) => {
  const [errorPlaceholder,setErrorPlaceholder] = useState(false)
  const handleStopPropogate = (e) => {
    e.stopPropagation()
  }

  
  return(
    <div key={product.id} className='card'>
      <Link to={`/single-product/${product.id}`}>
        <div className='icons'>
          <CiHeart onClick={handleStopPropogate}/>
          <BsCart3 onClick={handleStopPropogate}/>
        </div>
        <div className="img">
          <img onError={(i, s) => {
              if(!s){
                setErrorPlaceholder(true)
              }
            }} src={!product.image_link  || errorPlaceholder ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" : product.image_link } alt="" />
        </div>
        <div className="product-info">
          <h3>{parse(product.name)}</h3>
          <p title={product.description}>{parse(product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description)}</p>
        </div>
      </Link>
    </div>
  )
}


export const Container = ({children}) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}

export default Utils