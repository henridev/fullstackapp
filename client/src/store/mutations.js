export const SET_STATE = "SET_STATE";
export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE ";
export const SET_TASK_GROUP = "SET_TASK_GROUP";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESS_AUTHENTICATE_USER = "PROCESS_AUTHENTICATE_USER";

export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";

export const requestTaskCreation = (groupId) => {
  return {
    type: REQUEST_TASK_CREATION,
    groupId,
  };
};

export const createTask = (taskId, groupId, ownerId) => {
  return { type: CREATE_TASK, taskId, groupId, ownerId };
};

export const setTaskName = (taskId, name) => {
  return { type: SET_TASK_NAME, taskId, name };
};

export const setTaskGroup = (taskId, groupId) => {
  return { type: SET_TASK_GROUP, taskId, groupId };
};

export const setTaskComplete = (taskId, isComplete) => {
  return { type: SET_TASK_COMPLETE, taskId, isComplete };
};

export const requestAuthenticateUser = (username, password) => {
  return { type: REQUEST_AUTHENTICATE_USER, username, password };
};

export const processAuthenticateUser = (
  status = AUTHENTICATING,
  currentSession = null
) => {
  return {
    type: PROCESS_AUTHENTICATE_USER,
    session: currentSession,
    authenticated: status,
  };
};

export const setState = (state = {}) => {
  return {
    type: SET_STATE,
    state,
  };
};
