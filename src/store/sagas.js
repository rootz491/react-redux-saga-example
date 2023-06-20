import { all } from "redux-saga/effects";
import { watchFetchExampleData } from "./sagas/example.saga";

export default function* rootSaga() {
  yield all([
    watchFetchExampleData(),
    // Add other sagas here
  ]);
}
