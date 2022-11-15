const mongoose = require('mongoode');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title:String,
    photo:String,
    price:Number,
    rating:Number,
})

module.exports = mongoose.model("products", productSchema);