const connection = require('./connection');

const create = async (taskData) => {
  const db = await connection();
  const createResponse = await db.collection('tasks').insertOne(taskData);
  return {
    id: createResponse.insertedId,
    description: taskData.name,
    status: taskData.status,
    created: taskData.created,
    userId: taskData.userId,
  };
};

module.exports = {
  create,
};
