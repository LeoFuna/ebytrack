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

const getById = async (id) => {
  const db = await connection();
  const taskData = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  return taskData;
};

const update = async (newPayload) => {
  const db = await connection();
  await db.collection('tasks').updateOne(
    { _id: ObjectId(newPayload.id) }, { $set: newPayload },
  );
  return newPayload;
};

module.exports = {
  create,
  deleteOne,
  getByUserId,
  update,
  getById,
};
