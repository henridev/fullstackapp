const { connectToDB } = require("./config");
const defaultState = require("./defaultState");

(async () => {
  const { database, client } = await connectToDB();
  for (const collectionName in defaultState) {
    const collection = database.collection(collectionName);
    collection.deleteMany();
    collection.insertMany(defaultState[collectionName]);
  }
  console.log("database was fed");
  client.close();
  console.log("client closed down");
})();
