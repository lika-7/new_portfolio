import { all, fork } from "redux-saga/effects"
import projectsSaga from "./projectsSaga"

export function* rootSaga() {
  yield all([fork(projectsSaga)])
}

