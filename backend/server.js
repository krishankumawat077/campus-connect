const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows the backend to read JSON from the frontend

// Database Connection
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connection established!"))
  .catch((err) => console.log("Connection error:", err));

// A simple test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
