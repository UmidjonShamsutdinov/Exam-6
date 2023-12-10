import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { byCategoryThunk } from '../../redux/action/by-category-action'
import { useParams } from 'react-router-dom'
import pencilImg from "../../assets/single-cat-pencil.png"
import powderImg from "../../assets/single-cat-powder1.jpg"
import lipstickImg from "../../assets/single-cat-lipstick.webp"
import liquidImg from "../../assets/single-cat-liquid.png"
import lip_glossImg from "../../assets/single-cat-lip_gloss2.webp"
import gelImg from "../../assets/single-cat-gel.jpg"
import creamImg from "../../assets/single-cat-cream.jpg"
import paletteImg from "../../assets/single-cat-palette1.jpg"
import concealerImg from "../../assets/single-cat-concealer.webp"
import highlighterImg from "../../assets/single-cat-highlighter.webp"
import bb_ccImg from "../../assets/single-cat-bb_cc.jpg"
import contourImg from "../../assets/single-cat-contour.jpg"
import lip_stainImg from "../../assets/single-cat-lip_stain.jpg"
import mineralImg from "../../assets/single-cat-mineral.png"
import { Container } from '../../utils/Utils'
import Nav from '../../layout/nav/Nav'
import "./SingleCategory.scss"
import Card from '../../components/card/Card'



const SingleCategory = (props) => {
    const data = useSelector(state => state.single_category_data.category)
    const images = [mineralImg,pencilImg,powderImg,lipstickImg,liquidImg,lip_glossImg,gelImg,creamImg,paletteImg,concealerImg,highlighterImg,bb_ccImg,contourImg,lip_stainImg]
    const {categoryName} = useParams()
    console.log(categoryName);
    
    useEffect(()=>{
      if(localStorage.getItem("type")){
        let type = localStorage.getItem("type")
        props.byCategoryThunk(categoryName, type)
      }else{
        props.byCategoryThunk(categoryName)
      }
      
    },[])


  return (
    <div className='single-category'>
        <Nav/>
        <img src={images.filter(e=>e.includes(categoryName.split("&")[0]))} alt="img" />
        <Container>
          <div className='single-category-cards'>
            {
                data.map(e=>
                    <Card product={e} key={e.id}/>
                    )
            }
          </div>
        </Container>
    </div>
  )
}

export default  connect(null, {byCategoryThunk})(SingleCategory)