// Action types
export const FETCH_EXAMPLE_DATA = "FETCH_EXAMPLE_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action creators
export const fetchExampleData = () => ({
  type: FETCH_EXAMPLE_DATA,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
