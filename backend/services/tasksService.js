const Model = require('../models/tasksModel');
const { validateDescription, validateCreated } = require('../schemas/tasksSchema');

const createTask = async (taskData) => {
  const { description, created } = taskData;
  if (!validateDescription(description) || !validateCreated(created)) {
    return { err: { 
      code: 401,
      message: 'dados válidos, tente novamente',
    } };
  }
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

const updateTask = async (updatedTask, id) => {
  const updateResponse = await Model.update(id, updatedTask);
  return updateResponse;
};

module.exports = {
  createTask,
  deleteTask,
  getTasksByUserId,
  updateTask,
};
