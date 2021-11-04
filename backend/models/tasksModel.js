const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (taskData) => {
  const db = await connection();
  const createResponse = await db.collection('tasks').insertOne(taskData);
  return {
    id: createResponse.insertedId,
    description: taskData.description,
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

const getByUserId = async (userId) => {
  const db = await connection();
  const tasksFromUser = await db.collection('tasks').find({ userId }).toArray();
  return { tasksFromUser };
};

module.exports = {
  create,
  deleteOne,
  getByUserId,
};
