const express = require('express');
const connectDB = require('./src/databaseconfig/DatabaseConfig');
require('dotenv').config();


const app = express();
app.use(express.json())


connectDB();

app.listen(process.env.PORT, () => {
   `Server is running at ${process.env.PORT}`;
})

