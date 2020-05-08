import { take, put, select } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import axios from "axios";
import * as mutations from "./mutations";
import { history } from "./history";

const url =
  process.env.NODE_ENV === "production"
    ? ""
    : `http://${window.location.hostname}:7000`;

let path = null;

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerId = "U1";
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownerId));
    path = "/api/tasks/new";
    console.log("task creation saga");
    const { res } = yield axios.post(url + path, {
      task: {
        id: taskId,
        group: groupId,
        owner: ownerId,
        isComplete: false,
        name: "New Task",
      },
    });
    console.log("res", res);
  }
}

export function* taskUpdateSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE,
    ]);

    path = "/api/tasks/update";
    console.log("task update saga");
    const { res } = yield axios.post(url + path, {
      task: {
        id: task.taskId,
        group: task.groupId,
        isComplete: task.isComplete,
        name: task.name,
      },
    });
    console.log("res", res);
  }
}

export function* requestAuthenicateUserSaga() {
  while (true) {
    const user = yield take([mutations.REQUEST_AUTHENTICATE_USER]);
    path = "/api/auth/login";
    console.log("user login saga");
    try {
      const { data } = yield axios.post(url + path, {
        user: {
          username: user.username,
          password: user.password,
        },
      });
      console.log("data", data);
      if (!data) throw new Error("failed");
      yield put(mutations.setState(data.state));
      console.log("state set");
      yield put(
        mutations.processAuthenticateUser(
          mutations.AUTHENTICATED,
          data.state.session
        )
      );
      console.log("processing authentication");
      history.push("/home");
    } catch (error) {
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
      console.log("error can't authenticate user", error);
    }
  }
}

export function* requestUserSaga() {
  while (true) {
    const user = yield take([mutations.REQUEST_USER]);
    path = `/api/auth/user/${user.id}`;
    try {
      const { data } = yield axios.get(url + path);
      if (!data) throw new Error("failed");
      yield put(mutations.setUser(data.user));
    } catch (error) {
      console.log("error user data can't be fetched", error);
    }
  }
}
