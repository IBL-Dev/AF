const transactionService = require("../services/transaction.service");
const responseHandler = require("../utils/responseHeader");

const createTransaction = async (req, res, next) => {
  try {
    const transaction = await transactionService.createTransaction(req.body);
    responseHandler.success(res, "Transaction created successfully", transaction);
  } catch (error) {
    next(error);
  }
};

const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    responseHandler.success(res, "Transactions retrieved successfully", transactions);
  } catch (error) {
    next(error);
  }
};

const getTransactionById = async (req, res, next) => {
  try {
    const transaction = await transactionService.getTransactionById(req.params.id);
    if (!transaction) return responseHandler.error(res, "Transaction not found", 404);
    responseHandler.success(res, "Transaction retrieved successfully", transaction);
  } catch (error) {
    next(error);
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const transaction = await transactionService.updateTransaction(req.params.id, req.body);
    if (!transaction) return responseHandler.error(res, "Transaction not found", 404);
    responseHandler.success(res, "Transaction updated successfully", transaction);
  } catch (error) {
    next(error);
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await transactionService.deleteTransaction(req.params.id);
    if (!transaction) return responseHandler.error(res, "Transaction not found", 404);
    responseHandler.success(res, "Transaction deleted successfully", transaction);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};
