const { ObjectId } = require('mongodb');
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

const deleteOne = async (id) => {
  const db = await connection();
  const deleteResponse = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return deleteResponse;
};

module.exports = {
  create,
  deleteOne,
};
