const connectToDB = require("../database/config");

async function addNewComment(task) {
  const { collection, client } = await getCollection("comments");
  await collection.insertOne(task);
  client.close();
  return true;
}

module.exports = {
  addNewComment,
};
