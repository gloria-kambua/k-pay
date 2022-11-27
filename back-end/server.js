const express = require("express");
const cors = require("cors");
const fs = require('fs')
const mongoose = require("mongoose");
const Products = require("./Products");
const multer = require('multer');
const stripe = require("stripe")('sk_test_51M3umaK9152s7sV0L8eoUOLhPNTMncRS8FXwqpB0jTW1Mf5ksOdOVpzkiQVcMMaP0xiF95BKuE86kj2isTrjJWpy003nyrXEdn');
const upload = multer({dest:'images/'})
const request = require('request');
const { response } = require("express");
const Orders = require("./Orders");

const app = express();
const port = 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// connection url

const connection_url =
'mongodb+srv://gloria-kambua:gloria-kambua@cluster0.vc0mrck.mongodb.net/?retryWrites=true&w=majority'; 

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// API
app.get("/", (req, res) => res.status(200).send("Home Page"));

// add product

app.post("/products/add",(req, res) => {

  // const imagePath = req.file.path
  // const price = req.body.price
  // const title=req.body.title
  // const rating= req.body.rating

  const productDetail=req.body;
  console.log('product details are ****', productDetail)
  Products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//app.use('/images', express.static('images'))


app.get('/products/get',(req,res)=>{
  Products.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(200).send(data)
    }
  })
})

//Payment API
app.post("/payment/create", async (req, res) => {
  const totalAmount = req.body.amount;
  console.log("Payment Request recieved for this", totalAmount);

  const payment = await stripe.paymentIntents.create({
    amount:totalAmount *100,
    currency:'KES'
  })
  res.status(201).send({
    clientSecret: payment.client_secret,
  });
});

//API to add ORDER DETAILS
app.post("/orders/add", (req, res) => {
  const products = req.body.basket;
  const price = req.body.price;
  const phone = req.body.phone;
  const address = req.body.address;

  console.log("products",products)
  console.log("price",price)
  console.log("phone",phone)
  console.log("address",address)
  const orderDetail = {
    products: products,
    price: price,
    address: address,
    phone: phone,
  };

  Orders.create(orderDetail, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("order added to database >> ", result);
    }
  });
});


app.listen(port, () => console.log("listening on the port", port));
