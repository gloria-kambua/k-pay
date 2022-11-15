import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function AddPro() {
  const [newProduct, setNewProduct] =useState({
    title:'',
    photo:'',
    price:0,
    rating:0
  })
  const handleChange =(e)=>{
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
  }
  const handlePhoto=(e)=>{
    setNewProduct({...newProduct,photo:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append('title', newProduct.title)
    formData.append('photo', newProduct.photo)
    formData.append('price', newProduct.price)
    formData.append('rating', newProduct.rating)

    console.log('image is >>>',newProduct.photo);

    //.post("/products/add", { title, imageUrl, price, rating })

    axios.post("/products/add",formData)
    .then(res=>{
        console.log('response >>>>',res)
        setNewProduct(''); 
    })
    .catch(err=>{
        console.log('error',err)
    })
  }
  return (
    <form  onSubmit={handleSubmit} encType='multipart/form-data'>
        <label htmlFor="title">Title</label>
        <input type="text" name='title' value={newProduct.name} onChange={handleChange} />
        <label htmlFor="photo">Upload Image</label>
        <input type="file" accept='.png,.jpg,.jpeg' name='photo' onChange={handlePhoto} />
        <label htmlFor="price">Price</label>
        <input type="number" name='price' value={newProduct.name} onChange={handleChange} />
        <label htmlFor="rating">Rating</label>
        <input type="number" name='rating' value={newProduct.name} onChange={handleChange} />

        <input type="submit" name=""/>
    </form>
  )
}

export default AddPro