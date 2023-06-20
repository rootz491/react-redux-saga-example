import { all, fork } from "redux-saga/effects";
import exampleSaga from "./sagas/example.saga";

export default function* rootSaga() {
  yield all([
    fork(exampleSaga),
    // Add other sagas here
  ]);
}
