const express = require('express');
const { credentialsSchema } = require('../../../model/modalList');
const jwt = require('jsonwebtoken');

const apiRoute = express.Router();
apiRoute.use(express.json());

apiRoute.post('/v1/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await credentialsSchema.findOne({ where: {username} });

    if (!user) {
      return res.json({ status: 401, error: 'No user found' });
    }

    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      return res.json({ status: 401, error: 'Invalid username or password' });
    }
    const token = generateToken(username);
    return res.json({ status: 200, message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.json({ status: 500, error: 'Something went wrong. Please try again later.' });
  }
});

function generateToken(username) {
  const secretKey = process.env.JWT_SECRET;
  const expiresIn = '1h';

  const token = jwt.sign({ username }, secretKey, { expiresIn });
  return token;
}

module.exports = apiRoute;
