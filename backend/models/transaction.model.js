const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["income", "expense"], required: true },
  amount: { type: Number, required: true },
  category: { type: String, default: "Not set" },
  tags: { type: [String], default: ["Not set"] }, // Default as ["Not set"]
  date: { type: Date, default: Date.now },
  isRecurring: { type: Boolean, default: false },
  recurrencePattern: { 
    type: String, 
    enum: ["daily", "weekly", "monthly", "Not set"], 
    default: "Not set" 
  },
  endDate: { type: Date, default: null },
});

module.exports = mongoose.model("Transaction", transactionSchema);
