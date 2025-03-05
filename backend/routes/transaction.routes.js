const express = require("express");
const router = express.Router();
const transactionController = require("../controlers/transaction.controller");
const { verifyToken, verifyAdmin } = require("../middlewares/auth.middleware");

// 🔒 Protect all routes (Authenticated users only)
router.post("/create", verifyToken, transactionController.createTransaction);
router.get("/getall", verifyToken, transactionController.getAllTransactions);
router.get("/getone/:id", verifyToken, transactionController.getTransactionById);
router.put("/update/:id", verifyToken, transactionController.updateTransaction);
router.delete("/delete/:id", verifyToken, transactionController.deleteTransaction);

// 🔒 Admin-only route (Example)
router.delete("/admin/delete/:id", verifyToken, verifyAdmin, transactionController.deleteTransaction);

module.exports = router;
