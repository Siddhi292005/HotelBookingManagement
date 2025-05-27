# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🏨 StayEasy - Hotel Management System

Welcome to **StayEasy**, a full-stack hotel booking and management web application built as a **college project**. It allows users to sign up, search for hotels, book rooms, make payments, and check out — all in one seamless experience!

---

## ✨ Features

- 🔐 User Signup & Login
- 🏘️ Hotel Listings with Images
- 🔍 Hotel Search by Location & Dates
- 📅 Dynamic Room Availability
- 🛏️ Booking System with Room/Night Details
- 💳 Payment Form (Frontend & Backend)
- ✅ Booking Checkout with Room Count Update
- 🧾 MongoDB Integration for All Operations

---

## 🛠️ Tech Stack

### 🔹 Frontend:
- React.js (with React Router)
- Tailwind CSS (for styling)

### 🔹 Backend:
- Node.js
- Express.js
- MongoDB Atlas (with Mongoose ODM)
- dotenv (for environment variables)

---

## 📁 Project Structure

hotel_management/
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ └── public/
├── server/ # Express Backend
│ ├── models/
│ ├── routes/
│ ├── images/
│ ├── server.cjs
│ └── config.env
└── README.md


---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Siddhi292005/HotelBookingManagement.git
cd hotel_management

Setup Backend
cd server
npm install
# Create a config.env file with your MongoDB URI:
touch config.env

Inside config.env:

Inside config.env
ATLAS_URI=your_mongodb_connection_string

3. Setup Frontend

cd ../client
npm install
npm start

##📌 Upcoming Improvements
Integration with real payment gateway (e.g., Razorpay, Stripe)

Admin dashboard for hotel management

Hotel rating & review system

Email notifications


📝 License
This project is part of a college academic submission and is intended for learning and demonstration purposes only.
