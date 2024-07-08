const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth/routes'); // Ensure this path is correct
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });
const app = express();

const PORT = process.env.PORT || 5001;
const mongouri = process.env.MONGO_URI
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

const corsOptions = {
  origin: 'http://localhost:3002', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

mongoose.connect(mongouri, {
  serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
