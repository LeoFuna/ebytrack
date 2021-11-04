const Model = require('../models/tasksModel');

const createTask = async (taskData) => {
  const createResponse = await Model.create(taskData);
  return createResponse;
};

const deleteTask = async (id) => {
  const deleteResponse = await Model.deleteOne(id);
  return deleteResponse;
};

module.exports = {
  createTask,
  deleteTask,
};
