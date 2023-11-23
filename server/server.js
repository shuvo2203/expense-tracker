const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const database = require('./db/database');

PORT = process.env.PORT

const user = require('./routes/userRoute');
const income = require('./routes/incomeRoute');
const expense = require('./routes/expenseRoute');

app.use(express.json());

app.use('/api/v1', user);
app.use('/api/v1', income);
app.use('/api/v1', expense);

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`);
});