const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose');

const app =express()
const port =3001

//Middlewares
app.use(express.json)
app.use(cors())

//connection to mongo url
const connection_URL='mongodb+srv://gloria-kambua:gloria-kambua@cluster0.vc0mrck.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(connection_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//create an api
app.get('/',(req,res)=>{
    req.statusCode(200).send('Hello')
})

app.listen(port, ()=>console.log('listening the port'))