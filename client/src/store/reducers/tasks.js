import * as mutations from "../mutations";

export function tasks(tasks = [], action) {
  switch (action.type) {
    case mutations.SET_STATE:
      return action.state.tasks;
    case mutations.CREATE_TASK:
      console.log("create task action", action);
      return [
        ...tasks,
        {
          id: action.taskId,
          name: "New Task",
          group: action.groupId,
          owner: action.ownerId,
          isComplete: false,
        },
      ];
    case mutations.SET_TASK_COMPLETE:
      return tasks.map((task) => {
        return action.taskId === task.id
          ? { ...task, isComplete: action.isComplete }
          : task;
      });

    case mutations.SET_TASK_GROUP:
      return tasks.map((task) => {
        return action.taskId === task.id
          ? { ...task, group: action.groupId }
          : task;
      });

    case mutations.SET_TASK_NAME:
      return tasks.map((task) => {
        return action.taskId === task.id
          ? { ...task, name: action.name }
          : task;
      });
  }
  return tasks;
}
