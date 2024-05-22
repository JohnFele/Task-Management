const Task = require("../models/taskModel");

module.exports.createTask = async (req, res) => {
  
  try {
    const task = new Task({
      ...req.body,
      user: req.user.id,
    });
    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getAllTasks = async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      sortBy = 'createdAt',
      sortOrder = 'desc',
      filterBy = {} 
    } = req.query;
    const sortOrderValue = sortOrder === "asc" ? 1 : -1;
    const sort = { [sortBy]: sortOrderValue };
    const filter = { user: req.user.id, ...filterBy };
    const tasks = await Task.find(filter)
      .sort(sort)
      .limit(parseInt(limit))
      .skip((page - 1) * limit)
      .exec();
    const count = await Task.countDocuments(filter);

    res.status(200).json({ 
      tasks,
      totalTasks: count,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
      sortBy,
      sortOrder,
      filterBy,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).json({ message: "Task not found! Ensure that the ID is correct" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found! Ensure that the ID is correct" });
    }
    res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
