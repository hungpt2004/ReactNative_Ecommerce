require('dotenv').config();
const express = require('express');
const connectDB = require('./src/databaseconfig/DatabaseConfig');
const notificationRouter = require("./src/router/notification.router");

const app = express();
app.use(express.json());

connectDB().then(() => {
   app.use("/notifications", notificationRouter);

   app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server is running at http://localhost:${process.env.PORT || 3000}`);
   });
});
