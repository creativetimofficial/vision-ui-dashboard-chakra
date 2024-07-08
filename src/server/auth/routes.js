const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../../model/User'); // Ensure this path is correct
const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });

const jwtSecret = process.env.JWT_SECRET;
console.log(process.env.JWT_SECRET, 'JWT_SECRET');

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log('Received signup request with data:', { name, email, password });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', existingUser);
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await argon2.hash(password);
    console.log('Plain password:', password);
    console.log('Hashed password:', hashedPassword);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, jwtSecret, { expiresIn: '1h' });
    console.log('User created successfully:', newUser);
    console.log('Generated token:', token);
    res.status(201).json({ result: newUser, token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Signin Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Received signin request with data:', { email, password });

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log('User does not exist for email:', email);
      return res.status(400).json({ message: 'User does not exist' });
    }

    console.log('Plain password:', password);
    console.log('Stored hashed password:', existingUser.password);

    const isPasswordCorrect = await argon2.verify(existingUser.password, password);
    console.log('Password comparison result:', isPasswordCorrect);

    if (!isPasswordCorrect) {
      console.log('Invalid credentials for email:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, jwtSecret, { expiresIn: '1h' });
    console.log('Generated token:', token);

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
