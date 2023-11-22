const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const database = require('./db/database');

PORT = process.env.PORT

const user = require('./routes/userRoute');

app.use(express.json());

app.use('/api/v1', user);

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
});