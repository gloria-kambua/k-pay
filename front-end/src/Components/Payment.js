import React, { useState } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider';
import NavBar from './NavBar';
import CurrencyFormat from 'react-currency-format';
import { getTotalBasket } from '../reducer';
import { useNavigate } from 'react-router-dom';
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import { useEffect } from 'react';
import axios from '../axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Payment() {
    const [{basket,address,user},dispatch] = useStateValue();
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    const elements=useElements()
    const stripe = useStripe()
    const [clientSecret, setClientSecret] = useState('')
    useEffect(()=>{
      const fetchClientKey = async()=>{
        const data = await axios.post('/payment/create',{
          amount:getTotalBasket(basket),
        })
        setClientSecret(data.data.clientSecret);
      }
      fetchClientKey();
      console.log("clientSecret is >>>>", clientSecret);
    },[])

    const confirmPayment = async (e)=>{
      e.preventDefault();

      await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement)
      }
      })
      .then((result)=>{
        //clear basket
        axios.post('/orders/add',{
          basket:basket,
          price:getTotalBasket(basket),
          phone:address?.phone,
          address:address
        })


        dispatch({
          type:'EMPTY_BASKET',
        })
        MySwal.fire({
          icon: 'success',
          title: <p>Payment Successful</p>,
          confirmButtonColor: '#3085d6',
        }).then(() => {
          navigate('/')
        })
      })
      .catch((err)=>{
        console.warn(err)
      })
    }
  return (
    <Container>
        <NavBar/>
        <Main>
            <ReviewContainer>
                <h2>Review your order</h2>
                <AddressContainer>
                    <h5>Shipping Address</h5>
                    <div>
                        <p>Name: {address.fullName}</p>
                        <p>Phone Number: {address.phone}</p>
                        <p>Building: {address.building}</p>
                        <p>street: {address.street}</p>
                        <p>city: {address.city}</p>
                    </div>
                </AddressContainer>
                <PaymentContainer>
                    <h5>Payment Method</h5>
                    <div>
                        <p>Card Details</p>
                        {/* Card element */}
                        <CardElement/>
                    </div>
                </PaymentContainer>
                <OrderContainer>
                    <h5>Your Order</h5>
                    <div>
                    {
                                basket?.map((product)=>(
                                <Product>
                                <Image>
                                    <img src={product.image} alt="" />
                                </Image>
                                <Description>
                                    <h4>{product.title}</h4>
                                    <p>KES {product.price}</p>
                                </Description>
                                </Product>
                                ))
                            }
                    </div>
                </OrderContainer>
            </ReviewContainer>
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
                <button onClick={confirmPayment}>Place Order</button>
            </Subtotal>
        </Main>
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    height:fit-content;
    background-color:rgb(243,237,237);
    margin:auto;

    `;
const Main=styled.div`
    padding:15px;
    display:flex;
    
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      
      }
`;
const ReviewContainer=styled.div`
    background-color:#fff;
    flex:0.7;
    padding:15px;
    h2{
        font-weight:500;
        border-bottom:1px solid lightgray;
        padding-bottom:15px;
    }
`;
const AddressContainer=styled.div`
    margin-top:20px;
    div{
        margin-top:10px;
        margin-left:10px
    }
    p{
        font-size:14px;
        margin-top:4px;
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
    cursor:pointer;

  }
`;
const PaymentContainer=styled.div`
    margin-top:15px;

    div{
        margin-top:15px;
        margin-left:15px;
    }
    p{
        font-size:14px;
    }
`;
const OrderContainer=styled.div`
    margin-top:15px;
    margin-left:15px;
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
const SuccessMessageContainer= styled.div`
  display:none;
`;
export default Payment