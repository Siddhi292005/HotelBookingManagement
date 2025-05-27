
require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


module.exports={
  "Goa": [
    { "name": "Mandren beach resort", "image": "images/513217830mandrem.jpg", "price": 10000, "rating": 4.8, "description": "Situated in Mandrem...", "rooms": 1325 },
    { "name": "Grand Hyatt Goa", "image": "images/Grand-Hyatt-Goa-P348-Aerial-Overview-Outdoor-Pool.4x3.webp", "price": 13000, "rating": 5.0, "description": "A hotel in Bambolim...", "rooms": 1687 },
    { "name": "Okean De Goa Vagator", "image": "images/okean.jpg", "price": 8000, "rating": 4.5, "description": "Situated within 2.4 km of Vagator Beach...", "rooms": 1449 }
  ],
  "Bangalore": [
    { "name": "Taj MG Road Bengaluru", "image": "images/tajblr.jpg", "price": 7200, "rating": 4.5, "description": "An iconic luxury hotel...", "rooms": 1512 },
    { "name": "The Oberoi Bengaluru", "image": "images/The Oberoi Udaivilas.jpeg", "price": 9500, "rating": 4.7, "description": "Nestled in verdant grounds...", "rooms": 1049 },
    { "name": "ITC Gardenia", "image": "images/506206157.jpg", "price": 8800, "rating": 4.6, "description": "An eco-friendly 5-star hotel...", "rooms": 1650 },
    { "name": "The Leela Palace Bengaluru", "image": "images/leelapalace.jpg", "price": 12000, "rating": 4.8, "description": "With its pink sandstone facade...", "rooms": 1980 }
  ],
  "Mumbai": [
    { "name": "The Taj Mahal Palace", "image": "images/103705059.jpg", "price": 15000, "rating": 4.9, "description": "A heritage five-star...", "rooms": 1772 },
    { "name": "Trident Nariman Point", "image": "images/604298804.jpg", "price": 9000, "rating": 4.6, "description": "Located on Marine Drive...", "rooms": 1122 },
    { "name": "The St. Regis Mumbai", "image": "images/b4d6400450b492ec7587399e6ac55e72.jpeg", "price": 11000, "rating": 4.7, "description": "Situated in the heart of Mumbai...", "rooms": 1410 },
    { "name": "ITC Grand Central", "image": "images/628199264.jpg", "price": 8500, "rating": 4.5, "description": "Inspired by Victorian architecture...", "rooms": 1683 }
  ],
  "Delhi": [
    { "name": "The Imperial New Delhi", "image": "images/038fdf7d.avif", "price": 13000, "rating": 4.8, "description": "An iconic luxury hotel...", "rooms": 1498 },
    { "name": "Taj Palace", "image": "images/336041746.jpg", "price": 11000, "rating": 4.7, "description": "Spread over six acres...", "rooms": 1533 },
    { "name": "The LaLiT New Delhi", "image": "images/154232887.jpg", "price": 8500, "rating": 4.4, "description": "Located in the heart of the city...", "rooms": 1712 },
    { "name": "Hyatt Regency Delhi", "image": "images/hyatt-regency-delhi.jpg", "price": 9500, "rating": 4.5, "description": "A flagship luxury hotel...", "rooms": 1594 }
  ],
  "Ooty": [
    { "name": "Savoy – IHCL SeleQtions", "image": "images/Savoy – IHCL SeleQtions.jpg", "price": 7000, "rating": 4.6, "description": "A landmark since 1829...", "rooms": 1157 },
    { "name": "Gem Park Ooty", "image": "images/gempark.jpg", "price": 5000, "rating": 4.3, "description": "Overlooking the Nilgiri Mountains...", "rooms": 1309 },
    { "name": "Fortune Resort Sullivan Court", "image": "images/fortune-resort-sullivan.jpg", "price": 4500, "rating": 4.2, "description": "Set on the gentle slopes...", "rooms": 1365 },
    { "name": "Sinclairs Retreat Ooty", "image": "images/27766481.jpg", "price": 4000, "rating": 4.1, "description": "Located amidst lush greenery...", "rooms": 1570 }
  ],
  "Kashmir": [
    { "name": "The Lalit Grand Palace Srinagar", "image": "images/exterior-2.jpg", "price": 14000, "rating": 4.8, "description": "Once the residence of the Maharajas...", "rooms": 1664 },
    { "name": "Vivanta Dal View", "image": "images/upper-lawn-w-jpg-enscale-roomdetailbox-full-high.jpeg", "price": 12000, "rating": 4.7, "description": "Perched on the Kralsangri hill...", "rooms": 1913 },
    { "name": "Hotel Snowland", "image": "images/hotel-snow-land.jpg", "price": 5500, "rating": 4.2, "description": "Located in Sonmarg...", "rooms": 1397 },
    { "name": "Welcome Hotel by ITC, Pahalgam", "image": "images/welcomhotel-by-itc-hotels.jpg", "price": 8500, "rating": 4.5, "description": "Set amidst pine forests...", "rooms": 1862 }
  ],
  "Jaipur": [
    { "name": "Rambagh Palace", "image": "images/rambagh-palace-exterior.jpg", "price": 28000, "rating": 4.9, "description": "Former royal residence...", "rooms": 1720 },
    { "name": "Fairmont Jaipur", "image": "images/Fairmont Jaipur.jpeg", "price": 15000, "rating": 4.6, "description": "Lavish Mughal-inspired hotel...", "rooms": 1989 },
    { "name": "ITC Rajputana", "image": "images/ITC Rajputana.jpg", "price": 9500, "rating": 4.5, "description": "Traditional Rajasthani design...", "rooms": 1580 },
    { "name": "Trident Jaipur", "image": "images/Trident Jaipur.jpg", "price": 8500, "rating": 4.4, "description": "Lakeside hotel...", "rooms": 1138 }
  ],
  "Udaipur": [
    { "name": "The Oberoi Udaivilas", "image": "image/The Oberoi Udaivilas.jpg", "price": 32000, "rating": 4.9, "description": "Luxury palace hotel...", "rooms": 1550 },
    { "name": "Taj Lake Palace", "image": "images/Taj-lake-palace.jpeg", "price": 35000, "rating": 5.0, "description": "Famous floating hotel...", "rooms": 1731 },
    { "name": "Trident Udaipur", "image": "images/images (1).jpeg", "price": 9000, "rating": 4.6, "description": "Sprawling hotel with lush gardens...", "rooms": 1459 },
    { "name": "Radisson Udaipur", "image": "images/Radisson Udaipur.jpg", "price": 7000, "rating": 4.3, "description": "Contemporary hotel...", "rooms": 1324 }
  ]
};



