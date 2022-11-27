import React from 'react'
import styled from 'styled-components'
import Rating from '@material-ui/lab/Rating';
import { useStateValue } from '../StateProvider';

function Card({id,image,title,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket=(e)=>{
        e.preventDefault();

        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                title,
                price,
                image,
                rating
            }
        })
    }
  return (
    <Container>
        <Image>
            <img src={image} alt="" />
        </Image>
        <Description>
            <div>
                <h5>{title}</h5>
            </div>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            <p>KES {price}</p>
            <button onClick={addToBasket}>Add to Cart</button>
        </Description>
    </Container>
  )
}

const Container=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background-color:#fff;
    z-index:10;
`;
const Image=styled.div`
    width:100%;

    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:center;
    margin-top:20px;
    flex:0.3;
    img{
        width:180px;
        height:190px;
    }
`;
const Description=styled.div`
    width:90%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:spave-evenly;
    flex:0.7;

    div{
        display:flex;
        height: 35%;
        h5{
            font-weight:600;
    
        }
    }
    p{
        font-weight:600;
    }
    button{
        width:100%;
        height:33px;
        background-color:#ffb400;
        border:none;
        border-radius:10px;
        cursor:pointer;
    }

`;
export default Card