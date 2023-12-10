import React, { useEffect } from 'react'
import "./SingleProduct.scss"
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { singleProduct } from '../../redux/action/single-product-action'
import { Container } from '../../utils/Utils'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const SingleProduct = (props) => {
    const {product} = useSelector(state => state.single_product_data)
    const {id} = useParams()
    console.log(product);

    useEffect(()=>{
        props.singleProduct(id)
    },[])


  return (
    <div className='single__product'>
      <Container>
        <div>
          <div className='single__product-img'>
            <img src={product.image_link} alt="" />
          </div>
          <div className="single__product-info">
            <div className="product-title">
              <h2>{product.name}</h2>
              <p>{product.brand}</p>
            </div>
            <div className='product-price'>
              <p>{product.price} $</p>
            </div>
            <div className="product-color">
              <p>Choose a Color</p>
              <div className="colors">
                {product?.product_colors.map(e=>
                  <div className='color' style={{backgroundColor:e.hex_value}}></div>
                  )}
              </div>
            </div>
            <div className="buttons">
                <button>Add To Cart <BsCart3/></button>
                <button>Like <CiHeart/></button>
            </div>
          </div>
          <div className="product-description">
            
          </div>
        </div>
      </Container>
    </div>
  )
}

export default connect(null, {singleProduct}) (SingleProduct)