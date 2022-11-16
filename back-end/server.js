const express = require("express");
const cors = require("cors");
const fs = require('fs')
const mongoose = require("mongoose");
const Products = require("./Products");

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

//Multer
const multer = require('multer');
const upload = multer({dest:'images/'})




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
  console.log(`data from db`, data)

  let result = data.map(({ imagePath }) => imagePath)
    //console.log('the file path is ',result)

    if(err){
      res.status(500).send(err)
    }else{
      res.status(200).send(data)
    }
  })
})
app.listen(port, () => console.log("listening on the port", port));
