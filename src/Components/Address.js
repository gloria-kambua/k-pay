import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useStateValue } from '../StateProvider';
import NavBar from './NavBar';

function Address() {

    const[{},dispatch]=useStateValue();
    const navigate =useNavigate();
    const [fullName, setFullName]=useState('');
    const [phone, setPhone]=useState('');
    const [building, setBuilding]=useState('');
    const [street, setStreet]=useState('');
    const [city, setCity]=useState('');

    const deliver=(e)=>{
        e.preventDefault();

        dispatch({
            type:'SET_ADDRESS',
            item:{
                fullName,
                phone,
                building,
                street,
                city
            }
        })
        navigate('/payment')
    }
  return (
    <Container>
        <NavBar/>
        <Main>
        <FormContainer>
            <InputContainer>
                <p>Full Name</p>
                <input type="text" placeholder='John Smith' onChange={(e)=>setFullName(e.target.value)} value={fullName}/>
            </InputContainer>
            <InputContainer>
                <p>Phone Number</p>
                <input type="text" placeholder='25401233455'onChange={(e)=>setPhone(e.target.value)} value={phone}/>
            </InputContainer>
            <InputContainer>
                <p>Flat, House no., Building, Company, Apartment</p>
                <input type="text" placeholder=''onChange={(e)=>setBuilding(e.target.value)} value={building}/>
            </InputContainer>
            <InputContainer>
                <p>Street</p>
                <input type="text" placeholder=''onChange={(e)=>setStreet(e.target.value)} value={street}/>
            </InputContainer>
            <InputContainer>
                <p>City</p>
                <input type="text" placeholder=''onChange={(e)=>setCity(e.target.value)} value={city}/>
            </InputContainer>
            <LoginButton onClick={deliver}>Deliver to this Address</LoginButton>
        </FormContainer>
        </Main>
    </Container>
  )
}


const Container=styled.div`
    width:100%;
    height:fit-content;
    margin:auto;
    background-color:rgb(234,237,237);

    position:relative;
`;
const Main=styled.div`
    padding:15px;

`;
const FormContainer=styled.form`
    border:1px solid lightgray;
    width:55%;
    min-width:400px;
    height:fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:15px;
    background-color:#fff;
    margin:auto;
`;
const InputContainer=styled.div`
    width:100%;
    padding:10px;
        p{
            font-size:14px;
            font-weight:600;
        }
        input{
            width:95%;
            height:33px;
            padding-left:5px;
            border-radius:5px;
            border:1px soild lightgrey;
            margin-top:5px;
            outline:none;
            &:hover{
                border:2px solid #ffcc33;
            }
        }
`;
const LoginButton=styled.button`
        width:70%;
        height:35px;
        background-color: #ffa32a;
        border:none;
        outline:none;
        border-radius:10px;
        margin-top:30px;
        cursor:pointer;

`;
export default Address