const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const database = require('./db/database');

PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
});