const router = require("express").Router();
const {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/tasks");

//get all tasks + //create task
router.route('/').get(getAllTasks).post(createTask);

//get single task + //update task + //delete task
router.route('/:id').get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports = router;