const Model = require('../models/tasksModel');

const createTask = async (taskData) => {
  const createResponse = await Model.create(taskData);
  return createResponse;
};

const deleteTask = async (id) => {
  const deleteResponse = await Model.deleteOne(id);
  return deleteResponse;
};

const getTasksByUserId = async (userId) => {
  const tasksFromUser = await Model.getByUserId(userId);
  return tasksFromUser;
};

module.exports = {
  createTask,
  deleteTask,
  getTasksByUserId,
};
