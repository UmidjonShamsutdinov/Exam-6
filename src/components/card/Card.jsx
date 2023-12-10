import React, { useState } from 'react'
import parse from "html-react-parser"
import { Link, useParams } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { connect, useSelector } from 'react-redux';
import { addCartThunk } from '../../redux/action/cart-action';
import { addLikeThunk } from '../../redux/action/like-action';
import "./Card.scss"

const Card = (props) => {
    const [errorPlaceholder,setErrorPlaceholder] = useState(false)

    const addToLike = (addLikeProduct)=>{
        props.addLikeThunk(addLikeProduct)
    }


    const addToCart = (addCartProduct)=>{
        props.addCartThunk(addCartProduct)
    }




    let storeCurrency = useSelector(state => state.currency_data.currency)
    console.log(storeCurrency);
    let {noneed}= useParams()
    return(
      <div key={props.product.id} className='card'>
          <div className={noneed === "noneed" ? "icons noneed" : "icons"}>
            <CiHeart onClick={()=>addToLike(props.product)}/>
            <BsCart3 onClick={()=>addToCart(props.product)}/>
          </div>
        <Link to={`/single-product/${props.product.id}`}>
          <div className="img">
            <img onError={(i, s) => {
                if(!s){
                  setErrorPlaceholder(true)
                }
              }} src={!props.product.image_link  || errorPlaceholder ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png" : props.product.image_link } alt="" />
          </div>
          <div className="product-info">
            <h3>{parse(props.product.name)}</h3>
            <p title={props.product.description}>{parse(props.product.description.length > 120 ? props.product.description.slice(0, 120) + "..." : props.product.description)}</p>
            <p>{storeCurrency === "uzs" ? props.product.price*12300 : storeCurrency === "euro" ? props.product.price*0.93 : props.product.price}  {storeCurrency.toUpperCase()}</p>
          </div>
        </Link>
      </div>
    )
  }

  export default connect(null, {addCartThunk, addLikeThunk}) (Card)