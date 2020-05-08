const express = require("express");
const router = express.Router();
const { login, getUser } = require("../mutations/authenticate");

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body.user;
  const _res = await login(username, password);
  if (!_res) return res.status(500).send("unauthorized");
  console.log("_res", _res);
  const { token, state } = _res;
  state.comments = [];
  return res.status(200).send({
    token,
    state,
  });
});

router.get("/user/:id", async (req, res, next) => {
  const userId = req.params.id;
  console.log("userId", userId);
  const user = await getUser(userId);
  console.log("user", user);
  if (!user) return res.status(500).send("no user found");
  return res.status(200).send({
    user,
  });
});

module.exports = router;
