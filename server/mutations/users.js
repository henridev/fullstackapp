const connectToDB = require("../database/config");

async function addNewUser(task) {
  const { collection, client } = await getCollection("users");
  await collection.insertOne(task);
  client.close();
  return true;
}

module.exports = {
  addNewUser,
};
