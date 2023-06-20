import { takeEvery, put, call, fork, all } from "redux-saga/effects";
import {
  FETCH_EXAMPLE_DATA,
  fetchDataFailure,
  fetchDataSuccess,
} from "../actions/example.action";
import { fetchExampleData } from "../apis/example.api";

// Worker saga to fetch example data
export function* fetchExampleDataSaga() {
  try {
    // Make an API call to fetch example data
    const data = yield call(fetchExampleData);

    // Dispatch success action with the retrieved data
    yield put(fetchDataSuccess(data));
  } catch (error) {
    // Dispatch failure action if an error occurs
    yield put(fetchDataFailure(error.message));
  }
}

// Watcher saga to listen for the action and trigger worker saga
export function* watchFetchExampleData() {
  yield takeEvery(FETCH_EXAMPLE_DATA, fetchExampleDataSaga);
}

export default function* exampleSaga() {
  yield all([
    fork(watchFetchExampleData),
  ]);
}