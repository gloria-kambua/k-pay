import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

function Login() {
    const [phonenumber, setPhoneNumber]=useState('');
    const [password, setPassword]=useState('');
    const btnLogin = ()=>{

    }
  return (
    <Container>
        <Logo>
            <img src="./new-logo.svg" alt="My Logo" />
        </Logo>
        <FormContainer>
            <h3>Sign-In</h3>
            <InputContainer>
                <p>Phone Number</p>
                <input type="number" placeholder='254740152507' onChange={(e)=>setPhoneNumber(e.target.value)} value={phonenumber} required/>
            </InputContainer>
            <InputContainer>
                <p>Password</p>
                <input type="password" placeholder='**********'onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </InputContainer>
            <LoginButton  onClick={btnLogin}>Login</LoginButton>
            <InfoText>
                By continuing, you agree to K-Mart's <span>Terms and Conditions</span>.
            </InfoText>
        </FormContainer>
        <SignUpButton>Create Account in K-Mart</SignUpButton>
    </Container>
  )
}

const Container = styled.div`
    width:40%;
    min-width:450px;
    height:fit-content;
    padding:15px;
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Logo= styled.div`
    width:120px;
    margin-bottom:20px;
    img{
        width:100%;
        background: black;
    }
`;
const FormContainer = styled.form`
    border:1px solid lightgray;
    height:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:15px;

    h3{
        font-size:28px;
        font-weight:400;
        line-height:33px;
        align-self:flex-start;
        margin-bottom:10px
    }
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

            &:hover{
                border:1px solid #ffcc33;
            }
        }
`;
const LoginButton=styled.button`
        width:70%;
        height:35px;
        background-color: #ffcc33;
        border:none;
        outline:none;
        border-radius:10px;
        margin-top:30px;
        color:#fff;

`;
const InfoText = styled.p`
        font-size:12px;
        width:100%;
        word-wrap:normal;
        word-break:normal;
        margin-top:20px;
        
        span{
            color: #2F9D6A;
        }
`;
const SignUpButton=styled.button`
        width: 55%;
        height:35px;
        font-size:12px;
        margin-top:20px;

        &:hover{
            background-color:#dfdfdf;
            border:1px solid gray;
        }
`;
export default Login