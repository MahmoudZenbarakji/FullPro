// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/connect');
const userRoutes = require('./Routes/userRoute')
const courseRoute = require("./Routes/courseRoute")
dotenv.config();
const app = express();
const port = 3000;


const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/uploads", express.static("uploads"));
app.use('/api/users', userRoutes);
app.use("/api/course", courseRoute)
connectDB();



app.listen(port, (error) => {
  if (!error)
    console.log(`✅ Server running at http://localhost:${port}`);
  else
    console.log('❌ Error starting server:', error);
});
