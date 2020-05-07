const express = require("express");
const router = express.Router();
const { login } = require("../mutations/authenticate");

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

module.exports = router;
