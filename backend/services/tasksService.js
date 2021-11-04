const Model = require('../models/tasksModel');

const createTask = async (taskData) => {
  const createResponse = await Model.create(taskData);
  return createResponse;
};

module.exports = {
  createTask,
};
