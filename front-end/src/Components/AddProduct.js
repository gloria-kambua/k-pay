import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';


function AddProduct() {
    const navigate =useNavigate()

    // const [selectedImage, setSelectedImage] = useState(null);
    // const [imageUrl, setImageUrl] = useState(null);

    // useEffect(() => {
    //     if (selectedImage) {
    //       setImageUrl(URL.createObjectURL(selectedImage));
    //     }
    //   }, [selectedImage]);
    const [title, setTitle] =useState('');
    const [imageURL, setImageURL] =useState('');
    const [price, setPrice] =useState(0);
    const [rating, setRating] =useState(0);

    const addProduct =(e)=>{
        e.preventDefault();
        axios.post("/products/add", { title, imageURL, price, rating })
            .then(() => {
                setTitle("");
                setImageURL('');
                setPrice(0);
                setRating(0);
                navigate('/');
            })
            .catch((error) => alert(error.message));
    }
  return (
    <Container>
        <Logo>
            <img src="./logo.svg" alt="My Logo" />
        </Logo>
        <FormContainer>
            <h3>Add Product</h3>
            <InputContainer>
                <p>Title</p>
                <input type="text" placeholder="" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </InputContainer>
            <InputContainer>
                <p>Image URL</p>
                <input type="text" placeholder="" onChange={(e)=>setImageURL(e.target.value)} value={imageURL}/>
            </InputContainer>
            {/* <InputContainer>
                <p>Image</p>
                <>
                <input
                    accept="image/*"
                    type="file"
                    id="image"
                    style={{ display: 'none' }}
                    onChange={e => setSelectedImage(e.target.files[0])}
                    />
                <label htmlFor="image">
                    <Button variant="contained" color="primary" component="span" style={ButtonStyle}>
                        Upload Image
                    </Button>
                </label>
                {imageUrl && selectedImage && (
                    <Box mt={2} textAlign="center">
                    <div style={{ margin: '10px' }}>Image Preview:</div>
                    <img src={imageUrl} alt={selectedImage.name} height="100px" style={ImageStyle} id="image"/>
                    </Box>
                )}
                </>
            </InputContainer> */}
            <InputContainer>
                <p>Price</p>
                <input type="text" placeholder='KES'onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </InputContainer>
            <InputContainer>
                <p>Rating</p>
                <input type="number" placeholder=''onChange={(e)=>setRating(e.target.value)} value={rating}/>
            </InputContainer>
            <LoginButton onClick={addProduct}>Add Product</LoginButton>
        </FormContainer>
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
        width:100%
    }
`;
const FormContainer = styled.form`
    border:1px solid lightgray;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:15px;
    width:55%;
    min-width:400px;
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
            outline:none;
            &:hover{
                border:1px solid #fb8c00;
            }
        }
        Button{
            background-color: #ffcc33;
        }
`;
const LoginButton=styled.button`
        width:70%;
        height:35px;
        background-color: #f57c00;
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
const ButtonStyle={
    backgroundColor: "#fb8c00",
    width:"100%",


}
const ImageStyle={
    display: "flex",
    margin: "auto",
    width: "50%",
    height: "50%",
}
export default AddProduct