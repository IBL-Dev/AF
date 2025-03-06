const Goal = require("../models/goal.model");
const responseHandler = require("../utils/responseHeader");

const createGoal = async (req, res, next) => {
    try {
      if (!req.user || !req.user.id) {
        return responseHandler.error(res, "Unauthorized: User ID is missing", 401);
      }
  
      const goal = await Goal.create({ userId: req.user.id, ...req.body });
      responseHandler.success(res, "Goal created successfully", goal);
    } catch (error) {
      next(error);
    }
  };
  
const updateGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!goal) return responseHandler.error(res, "Goal not found", 404);
    responseHandler.success(res, "Goal updated successfully", goal);
  } catch (error) {
    next(error);
  }
};

const getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    responseHandler.success(res, "Goals retrieved successfully", goals);
  } catch (error) {
    next(error);
  }
};

module.exports = { createGoal, updateGoal, getGoals };
