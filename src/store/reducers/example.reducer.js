import {
  FETCH_EXAMPLE_DATA,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
} from "../actions/example.action";

// Define the initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Define the reducer function
const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_EXAMPLE_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer;
