const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    price:Number,
    products:Array,
    phone:Number,
    address:Object,
})

module.exports = mongoose.model("orders",OrderSchema)