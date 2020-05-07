const { addNewTask, updateTask } = require("./tasks");

function testTasks(params) {
  addNewTask({
    name: "latest",
    id: 1,
  }).then(() => {
    updateTask({
      id: 1,
      name: "latest and greatest",
    });
  });
}
