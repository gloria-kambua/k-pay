const express = require("express");
const cors = require("cors");
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

app.get("/", (req, res) => res.status(200).send("Home Page"));

// add product

app.post("/products/add", (req, res) => {
  const productDetail = req.body;

  console.log("Product Detail >>>>", productDetail);

  Products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log("listening on the port", port));
