const express = require('express');
const connectDB = require('./src/databaseconfig/DatabaseConfig');
const authRouter = require('./src/routes/authen.route');
require('dotenv').config();

const app = express();
app.use(express.json())

connectDB();

app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
   `Server is running at ${process.env.PORT}`;
})

