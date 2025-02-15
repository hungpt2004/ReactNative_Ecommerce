const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;
// const mongoURL = 'mongodb+srv://longvolongvo360:%40longvo360@testingbooking.ett2u.mongodb.net/MMA ';
const connectDB = async () => {
   try {
      await mongoose.connect(mongoURL);  
      console.log('MongoDB connected successfully');
   } catch (err) {
      console.error('Error connecting MongoDB:', err.message);
      process.exit(1);  
   }
};

module.exports = connectDB;
