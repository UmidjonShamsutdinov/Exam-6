import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card';
import { Container } from '../../utils/Utils';
import "./Like.scss"
import Nav from '../../layout/nav/Nav';

const Like = () => {
    let {like} = useSelector(state => state.liked_data)
    console.log(like);
  return (
    <>
        <Nav/>
        <Container>
            <div className='like_main'>
                {
                    like.map(e=>
                        <div className='like'>
                            <Card product={e} key={e.id}/>
                        </div>
                        )
                }
            </div>
        </Container>
    </>
  )
}

export default Like