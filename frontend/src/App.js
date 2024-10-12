import React from 'react';
import axios from 'axios';
import money from "../../frontend/src/img/money.jpg";

const App = () => {
  const handlePayment = async () => {
    const { data } = await axios.post('http://localhost:5000/create-order', { amount: 500 });

    const options = {
      key: 'rzp_test_M7h9WR6RKUSbCy', 
      amount: data.amount,
      currency: 'INR',
      name: 'vipul',
      description: 'Test Transaction',
      image: money,
      order_id: data.id,
      handler: (response) => {
        console.log(response); 
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '6239579277', //vipul
      },
      notes: {
        address: 'Your Address',
      },
      theme: {
        color: '#F37254',  
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePayment}
      >
        
       plz Do Pay Now i need some money to buy New lapto plz click
      </button>
    </div>
  );
};

export default App;
