import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/api/signup", formData);
      setMessage(response.data.message || "Signup successful!");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage("User already exists.");
      } else {
        setMessage("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-3 rounded-lg text-white border border-white"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-lg text-white border border-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-lg text-white border border-white"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-green-500 w-full text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer shadow-black"
          >
            Sign Up
          </button>
        </form>
        {message && <p className="text-white mt-4">{message}</p>}
        <p className="text-white mt-4 text-center">
          Already have an account? <Link to="/" className="underline text-blue-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
