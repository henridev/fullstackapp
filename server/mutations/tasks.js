const { getCollection } = require("../database/config");

async function addNewTask(task) {
  const { collection, client } = await getCollection("tasks");
  await collection.insertOne(task);
  client.close();
  return true;
}

async function updateTask(task) {
  const { id, group, name, isComplete } = task;
  const { collection, client } = await getCollection("tasks");
  name ? await collection.updateOne({ id }, { $set: { name } }) : null;
  group ? await collection.updateOne({ id }, { $set: { group } }) : null;
  isComplete
    ? await collection.updateOne({ id }, { $set: { isComplete } })
    : null;
  client.close();
  return true;
}

module.exports = {
  addNewTask,
  updateTask,
};
