const express = require("express");
const router = express.Router();
const { addNewTask, updateTask } = require("../mutations/tasks");

router.post("/new", async (req, res, next) => {
  const task = req.body.task;
  await addNewTask(task);
  console.log("task was added");
  return res.status(200).send("success");
});

router.post("/update", async (req, res, next) => {
  const task = req.body.task;
  await updateTask(task);
  return res.status(200).send("success");
});

module.exports = router;
