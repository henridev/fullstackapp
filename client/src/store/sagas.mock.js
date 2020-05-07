import { take, put, select } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import * as mutations from "./mutations";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.requestTaskCreation);
    const ownerId = "U1";
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownerId));
  }
}
