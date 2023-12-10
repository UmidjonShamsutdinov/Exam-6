import React from 'react'
import "./Cart.scss"
import { useSelector } from 'react-redux'
import { Container } from '../../utils/Utils'
import Card from '../card/Card'
import Nav from '../../layout/nav/Nav'

const Cart = () => {
    const {cart} = useSelector(state => state.add_to_cart_data)
  return (
    <>
        <Nav/>
        <div className='cart__main'>
            <Container>
                <div className='carts'>
                    {
                        cart.map(product=>
                            product !== null && product !== undefined && <div className="cart">
                                <Card product={product} key={product.id}/>
                            </div>
                            )
                    }
                </div>
            </Container>
        </div>
    </>
  )
}

export default Cart