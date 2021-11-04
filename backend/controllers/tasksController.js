const Service = require('../services/tasksService');

const createTask = async (req, res) => {
  const { description, status, created, userInfo } = req.body;
  const createResponse = await Service.createTask({ 
    description, status, created, userId: userInfo.id,
   });
   res.status(200).json(createResponse);
};

module.exports = {
  createTask,
};
