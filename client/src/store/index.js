import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import createSageMiddleware from "redux-saga";
const sagaMiddleware = createSageMiddleware();
import {
  taskCreationSaga,
  taskUpdateSaga,
  requestAuthenicateUserSaga,
} from "./sagas";

import { comments } from "./reducers/comments";
import { tasks } from "./reducers/tasks";
import { users } from "./reducers/users";
import { groups } from "./reducers/groups";
import { session } from "./reducers/session";

export const store = createStore(
  combineReducers({
    session,
    tasks,
    comments,
    groups,
    users,
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(taskCreationSaga);
sagaMiddleware.run(taskUpdateSaga);
sagaMiddleware.run(requestAuthenicateUserSaga);
