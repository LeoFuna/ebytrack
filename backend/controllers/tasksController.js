const Service = require('../services/tasksService');

const createTask = async (req, res) => {
  const { description, status, created, userInfo } = req.body;
  const createResponse = await Service.createTask({ 
    description, status, created, userId: userInfo.id,
   });
   return res.status(200).json(createResponse);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleteResponse = await Service.deleteTask(id);
  return res.status(200).json(deleteResponse);
};

const getTasksByUserId = async (req, res) => {
  const { userInfo: { id } } = req.body;
  const tasksFromUser = await Service.getTasksByUserId(id);
  return res.status(200).json(tasksFromUser);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { updatedTask } = req.body;
  const updateResponse = await Service.updateTask(updatedTask, id);
  res.status(200).json(updateResponse);
};

module.exports = {
  createTask,
  deleteTask,
  getTasksByUserId,
  updateTask,
};
