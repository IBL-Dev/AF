require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

// MongoDB Connection URL from .env file
const mongoURL = process.env.MONGO_URL || "mongodb+srv://anjana2:anjana@cluster0.rg6ebmf.mongodb.net/AF";

// Connect to MongoDB
mongoose.connect(mongoURL)
    .then(() => console.log("✅ MongoDB connection successful"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

module.exports = mongoose;
