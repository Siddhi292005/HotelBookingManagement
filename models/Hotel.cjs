// /models/Hotel.js

const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  description: String,
  location: String,
  image: String,
  rooms: Number,
});

module.exports = mongoose.model("Hotel", hotelSchema);
