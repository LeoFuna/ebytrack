const Service = require('../services/tasksService');

const createTask = async (req, res) => {
  const { description, status, created, userInfo } = req.body;
  const createResponse = await Service.createTask({ 
    description, status, created, userId: userInfo.id,
   });
   res.status(200).json(createResponse);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deleteResponse = await Service.deleteTask(id);
  res.status(200).json(deleteResponse);
};

module.exports = {
  createTask,
  deleteTask,
};
