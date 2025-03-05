const Transaction = require("../models/transaction.model");

class TransactionService {
  
  // Create Transaction
  async createTransaction(data) {
    return await Transaction.create(data);
  }

  // Get All Transactions
  async getAllTransactions() {
    return await Transaction.find();
  }

  // Get Transaction by ID
  async getTransactionById(id) {
    return await Transaction.findById(id);
  }

  // Update Transaction
  async updateTransaction(id, data) {
    return await Transaction.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  // Delete Transaction
  async deleteTransaction(id) {
    return await Transaction.findByIdAndDelete(id);
  }
}

module.exports = new TransactionService();
