const path = require("path");
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-779sm.mongodb.net/test?retryWrites=true&w=majority`;

async function connectToDB() {
  try {
    const client = await MongoClient.connect(uri);
    console.log("Client available...");
    const database = client.db("test");
    return { database, client };
  } catch (error) {
    console.log(error);
  }
}

async function getCollection(collectionName) {
  const { database, client } = await connectToDB();
  return {
    collection: database.collection(collectionName),
    db: database,
    client,
  };
}

module.exports = { connectToDB, getCollection };

//#region

// MongoClient.connect(uri, function (err, client) {
//   if (err) {
//     console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
//   }
//   console.log("Connected...");
//   const collection = client.db("test").collection("devices");
//   collection;
//   client.close();
// });

// async function connectToDB(params) {
//   const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
//   console.log("Client available...");
//   return client;
// }

//#endregion
