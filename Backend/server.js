// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db/connect');
const  userRoutes = require('./Routes/userRoute')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// ✅ Use user routes
app.use('/api/users', userRoutes);

app.listen(PORT, (error) => {
  if (!error)
    console.log(`✅ Server running at http://localhost:${PORT}`);
  else
    console.log('❌ Error starting server:', error);
});
