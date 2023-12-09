import React from 'react'
import logo from "../../assets/logo.svg"
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Container } from '../../utils/Utils';
import { Link } from 'react-router-dom';
import "./Nav.scss"


const Nav = () => {
  return (
    <nav>
        <div className="nav__top">
            <p className="logo">New Products Every Day!</p>
        </div>
        <Container>
            <div className="nav__bottom">
                <Link><BsCart3/></Link>
                <img src={logo} alt="" />
                <Link><CiHeart/></Link>
            </div>
        </Container>
    </nav>
  )
}

export default Nav