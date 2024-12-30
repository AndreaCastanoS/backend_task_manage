const Task = require("../models/Task.js");
const { body, query, param, validationResult } = require("express-validator");

const controller = {
  create: [
    body("title").notEmpty().withMessage("The field 'title' is required."),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string.")
      .isLength({ min: 15 })
      .withMessage(
        "The field 'description' must be at least 15 characters long."
      ),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      try {
        const { title, description, status } = req.body;
        const newTask = await Task.create({ title, description, status });
        res.status(201).json({
          success: true,
          message: "The task was successfully created.",
          response: newTask,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error creating the task.",
          error: error.message,
        });
      }
    },
  ],

  read: [
    query("status")
      .optional()
      .isIn(["completed", "pending"])
      .withMessage("Invalid status value. Use 'completed' or 'pending'."),

    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      try {
        const { status } = req.query;
        const filter = {};

        if (status) {
          filter.status = status === "completed";
        }

        const tasks = await Task.find(filter);

        res.status(200).json({
          success: true,
          message: "Tasks retrieved successfully.",
          response: tasks,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error retrieving tasks.",
          error: error.message,
        });
      }
    },
  ],

  readById: [
    param("id").isMongoId().withMessage("Invalid task ID format."),

    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
          return res.status(404).json({
            success: false,
            message: "Task not found.",
          });
        }

        res.status(200).json({
          success: true,
          message: "Task retrieved successfully.",
          response: task,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error retrieving the task.",
          error: error.message,
        });
      }
    },
  ],

  update: [
    param("id").isMongoId().withMessage("Invalid task ID format."),
    body("title")
      .optional()
          .isLength({ min: 3 })
          .withMessage("Title must be at least 3 characters long."),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string.")
      .isLength({ min: 15 })
      .withMessage(
        "The field 'description' must be at least 15 characters long."
      ),

    async (req, res) => {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return res.status(400).json({
          success: false,
          errors: errors,
        });
      }

      try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
          id,
          { title, description, status },
          { new: true, runValidators: true }
        );

        if (!updatedTask) {
          return res.status(404).json({
            success: false,
            message: "Task not found.",
          });
        }

        res.status(200).json({
          success: true,
          message: "Task updated successfully.",
          response: updatedTask,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error updating the task.",
          error: error.message,
        });
      }
    },
  ],

  destroy: [
    param("id").isMongoId().withMessage("Invalid task ID format."),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      try {
        const { id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
          return res.status(404).json({
            success: false,
            message: "Task not found.",
          });
        }

        res.status(200).json({
          success: true,
          message: "Task deleted successfully.",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error deleting the task.",
          error: error.message,
        });
      }
    },
  ],
};

module.exports = controller;
