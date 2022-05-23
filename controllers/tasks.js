const Task = require("../Models/Task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/customError");
//get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  console.log("creating task ...");
  res.status(200).json(task);
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOne({ _id: id });
  console.log(task);
  if (!task) {
    return next(createCustomError("Task Not Found !", 404));
  }

  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError("Task Not Found !", 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return next(createCustomError("Task Not Found !", 404));
  }
  res
    .status(200)
    .json({ task, success: true, msg: "task successfuly deleted" });
});

module.exports = {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
};
