import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.svg"
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Container } from '../../utils/Utils';
import { Link, NavLink, useParams } from 'react-router-dom';
import { singleTypE } from '../../redux/action/single-type';
import "./Nav.scss"
import db from '../../data/db.json'
import { connect, useSelector } from 'react-redux';
import { currencyThunk } from '../../redux/action/currency-action';

const Nav = (props) => {
  let types = Object.keys(db)  
  let {type} = useParams()
  let storeCurrency = useSelector(state => state.currency_data.currency)
  const [currency, setCurrency] = useState(storeCurrency || "")
  

  useEffect(()=>{
    props.currencyThunk(currency)
  },[currency])
  

  useEffect(()=>{
    props.singleTypE(type)
  },[type])
  return (
    <nav>
        <div className="nav__top">
            <p className="logo">New Products Every Day!</p>
        </div>
        <Container>
            <div className="nav__bottom">
                <Link to="/cart/noneed"><BsCart3/></Link>
                <Link to="/"><img src={logo} alt="" /></Link>
                <Link to="/like/noneed"><CiHeart/></Link>
            </div>
            <div className='nav__links'>
              {
                types.map((e,i)=>
                  <NavLink key={i} end className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={`/${e}`}>{e.split("_").join(" ").toUpperCase()}</NavLink>
                )
              }
              <div className="currency">
                <select value={storeCurrency} onChange={(e)=>{setCurrency(e.target.value)}}>
                  <option value="usd">USD</option>
                  <option value="uzs">UZS</option>
                  <option value="euro">EURO</option>
                </select>
              </div>
            </div>
        </Container>
    </nav>
  )
}

export default connect(null, {singleTypE,currencyThunk}) (Nav)