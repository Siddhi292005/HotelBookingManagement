
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handlePayment = async(e) => {
    e.preventDefault();


    try{
        const response= await axios.post("http://localhost:3000/api/payment",{
         name:name,
        cardNumber:cardNumber,
        expiry:expiry,
        cvv:cvv,
        });
        
    alert("Payment successful!");
    navigate("/welcome"); 
    }
    catch(error)
    {
        console.error("Payment failed", error);
        alert("Payment failed. Try again");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-800'>
    <div className="payment-container bg-gray-900 p-10 rounded-lg shadow-lg">
      <h2 className='text-4xl font-bold text-center text-white mb-6'>Payment Details</h2>
      <form onSubmit={handlePayment} className='flex flex-col items-centre space-y-6'>
        <input
          type="text"
          placeholder="Cardholder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='p-3 rounded-lg text-white space-y-6 border border-amber-50'
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          className='p-3 rounded-lg text-white space-y-6 border border-amber-50'
        />
        <input
          type="text"
          placeholder="MM/YY"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
          className='p-3 rounded-lg text-white space-y-6 border border-amber-50'
        />
        <input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
          className='p-3 rounded-lg text-white space-y-6 space-x-6 border border-amber-50'
        />
        <button type="submit" className='justify-between bg-green-500 w-1/3 text-white py-2 rounded-lg hover:bg-green-600 transition'>Pay Now</button>
      </form>
    </div>
    </div>
  );
}

export default PaymentPage;



