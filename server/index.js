const express = require('express');
const cors = require('cors')
require('dotenv').config();
const loginRoutes = require('./routes/v1/Login/login');
const { DBConnection } = require('./connection/connection');

DBConnection();

const app = express();

app.use(cors());
app.use('/api', loginRoutes);

app.listen(process.env.PORT , () => {
    console.log(`server is running on port: ${process.env.PORT}`)
})