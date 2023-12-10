import React from 'react'
import "./Hero.scss"
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


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import db from "../../data/db.json"


// import required modules
import { Autoplay} from 'swiper/modules';
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Hero = () => {
    const {singletype} = useSelector(state => state.single_type_data)
    const {type} = useParams()
    type != undefined ? localStorage.setItem("type", type) : localStorage.removeItem("type")
    let types = Object.keys(db)
    let arr = [
        {
            name: "pencil",
            image: pencilImg
        },
        {
            name: "powder",
            image: powderImg
        },
        {
            name: "lipstick",
            image: lipstickImg
        },
        {
            name: "liquid",
            image: liquidImg
        },
        {
            name: "lip_gloss",
            image: lip_glossImg
        },
        {
            name: "gel",
            image: gelImg
        },
        {
            name: "cream",
            image: creamImg
        },
        {
            name: "palette",
            image: paletteImg
        },
        {
            name: "concealer",
            image: concealerImg
        },
        {
            name: "highlighter",
            image: highlighterImg
        },
        {
            name: "bb_cc",
            image: bb_ccImg
        },
        {
            name: "contour",
            image: contourImg
        },
        {
            name: "lip_stain",
            image: lip_stainImg
        },
        {
            name: "mineral",
            image: mineralImg
        },
    ]
    let indexes = []
    
    if(type != undefined){
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j<types.length; j++){
                if(arr[i].name === db[type]?.category[j]){
                    indexes.push(arr[i])
                }
            }
        }
    }

  return (
    <div className='hero'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            >
            {
                type != undefined ? indexes.map((e,i)=>
                    <div key={i}>
                        <SwiperSlide className='hero__swiper-slide'>
                            <div className='hero__swiper-div'>
                                <img className='hero-banner' src={e.image} alt="" />
                                <Link to={`/single-category/${e.name}&${type}`}>View more information about {e.name}</Link>
                            </div>
                        </SwiperSlide>
                    </div>
                    )
                    :
                    arr.map((e,i)=>
                    <div key={i}>
                        <SwiperSlide className='hero__swiper-slide'>
                            <div className='hero__swiper-div'>
                                <img className='hero-banner' src={e.image} alt="" />
                                <Link to={`/single-category/${e.name}`}>View more information about {e.name}</Link>
                            </div>
                        </SwiperSlide>
                    </div>
                    )
            }
        </Swiper>
    </div>
  )
}

export default Hero