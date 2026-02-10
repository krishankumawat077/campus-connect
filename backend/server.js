const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let users = [];

// Test route
app.get("/", (req, res) => {
  res.send("Campus Connect Backend is running");
});

// Add user
app.post("/api/users", (req, res) => {
  const { name, branch, year, skills } = req.body;

  if (!name || !branch || !year || !skills) {
    return res.status(400).json({ message: "All fields are required" });
  }

  users.push({ name, branch, year, skills });

  res.status(201).json({ message: "User added successfully" });
});

// Get users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});