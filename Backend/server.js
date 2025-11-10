// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const  userRoutes = require('./Routes/userRoute')
const courseRoute = require("./Routes/courseRoute")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


connectDB();


app.use('/api/users', userRoutes);
app.use("/api/course",courseRoute)

app.listen(PORT, (error) => {
  if (!error)
    console.log(`✅ Server running at http://localhost:${PORT}`);
  else
    console.log('❌ Error starting server:', error);
});
