const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(200).json({ message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findById(id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found! Ensure that the id is correct" });
    }
    const updatedTask = await Task.findById(id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found! Ensure that the id is correct" });
    }
    res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
}