const express = require('express');
const cors = require('cors')
require('dotenv').config();
const loginRoutes = require('./routes/Login/login');

const app = express();

app.use(cors());
app.use('/api/v2', loginRoutes);

app.listen(process.env.PORT , () => {
    console.log(`server is running on port: ${process.env.PORT}`)
})