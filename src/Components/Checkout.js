import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getTotalBasket } from '../reducer';
import {useStateValue} from "../StateProvider";
import NavBar from './NavBar'
function Checkout() {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=(e,id)=>{
    e.preventDefault();

    //dispatch to reducer.js
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
  })
  }
  const navigate = useNavigate();
  return (
    <Container>
      <NavBar/>
      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>

          {
            basket?.map((product)=>(
              <Product>
              <Image>
                <img src={product.image} alt="" />
              </Image>
              <Description>
                <h4>{product.title}</h4>
                <p>KES {product.price}</p>
                <button onClick={(e)=>removeFromBasket(e,product.id)}>Remove</button>
              </Description>
            </Product>
            ))
          }
        </ShoppingCart>
        <Subtotal>
          <CurrencyFormat renderText={(value)=>(
            <>
              <p>
                Subtotal({basket.length} items):
                <strong> {value}</strong>
              </p>
              <small>
                <input type="checkbox"/>
                <span>This order contains a gift.</span>
              </small>
            </>
          )}
          decimalScale={2}
          value={getTotalBasket(basket)}
          displayType='text'
          thousandSeparator={true}
          prefix={"KES "}
          />
          <button onClick={()=>navigate('/address')}>Proceed to checkout</button>
        </Subtotal>
      </Main>
    </Container>
  )
}

const Container=styled.div`
  width:100%;
  height:fit-content;
  margin:auto;
  background-color:rgb(243,237,237);
  border:1px solid red;
`;
const Main=styled.div`
  display:flex;
  padding:15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

`;
const ShoppingCart=styled.div`
  padding:15px;
  background-color:#fff;
  flex:0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2{
    font-weight:500;
    border-bottom:1px solid gray;
    padding-bottom:15px;
  }
`;
const Subtotal=styled.div`
  flex:0.3;
  background-color:#fff;
  margin-left:15px;
  height:200px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
    margin-left: 0;
  }

  p{
    font-size:20px;
  }
  small{
    display:flex;
    align-items:center;
    margin-top:10px;

    span{
      margin-left:10px;
    }
  }
  button{
    width:65%;
    height:33px;
    margin-top:20px;
    background-color:#ffcc33;
    border:none;
    outline:none;
    border-radius:8px;
  }
`;
const Product=styled.div`
  display:flex;
  align-items:center;
  width: 55%;
  margin-bottom: 42px;
`;
const Image=styled.div`
  flex:0.3;
  img{
    width:100%;
  }
`;
const Description=styled.div`
  flex:0.7;
  padding-left:28px;
  h4{
    font-weight:500;
    font-size:18px;
  }
  p{
    font-weight:600;
    margin-top:10px;
  }
  button{
    background-color:transparent;
    color:#1384b4;
    border:none;
    outline:none;
    margin-top:10px;
    cursor:pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`;

export default Checkout