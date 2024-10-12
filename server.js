const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: 'rzp_test_M7h9WR6RKUSbCy',  
  key_secret: 'InvlmvfNMdvFhl5wW8j5xwrP'  
});

// API to create a new order
app.post('/create-order', async (req, res) => {
  const amount = req.body.amount * 100;  // Razorpay expects amount in paise
  try {
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `receipt_${Math.random().toString(36).substring(7)}`
    });
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
