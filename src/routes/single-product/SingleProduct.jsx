import React, { useEffect } from 'react'
import "./SingleProduct.scss"
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { singleProduct } from '../../redux/action/single-product-action'

const SingleProduct = (props) => {
    const data = useSelector(state => state.single_product_data)
    console.log(data);
    const {id} = useParams()


    useEffect(()=>{
        props.singleProduct(id)
    },[])


  return (
    <div>SingleProduct</div>
  )
}

export default connect(null, {singleProduct}) (SingleProduct)