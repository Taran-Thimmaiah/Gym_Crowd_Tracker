const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Gym Crowd Tracker API is running...");
});

// Define the server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});