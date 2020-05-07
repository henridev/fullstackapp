const connectToDB = require("../database/config");

async function addNewGroup(task) {
  const { collection, client } = await getCollection("groups");
  await collection.insertOne(task);
  client.close();
  return true;
}

module.exports = {
  addNewGroup,
};
