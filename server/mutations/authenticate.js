const uuid = require("uuid").v4;
const md5 = require("md5");
const { getCollection, connectToDB } = require("../database/config");

let authenticationTokens = [];

async function assembleUserState(user) {
  const { database, client } = await connectToDB();
  const tasks = await database
    .collection("tasks")
    .find({ owner: user.id })
    .toArray();
  const groups = await database
    .collection("groups")
    .find({ owner: user.id })
    .toArray();
  client.close();
  return {
    tasks,
    groups,
    session: { authenticated: "AUTHENTICATED", id: user.id },
    user: { name: user.name, id: user.id },
  };
}

async function login(username, password) {
  const { collection, client } = await getCollection("users");
  const user = await collection.findOne({ name: username });
  client.close();
  if (!user) {
    return null;
  } else {
    let hash = md5(password);
    console.log("hash", hash, user.passwordHash);
    if (user.passwordHash !== hash) {
      return null;
    }
    let token = uuid();
    let state = await assembleUserState(user);
    authenticationTokens.push({ token, userId: user.id });
    return { token, state };
  }
}

module.exports = {
  login,
};
