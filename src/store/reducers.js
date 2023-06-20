import { combineReducers } from "redux";
import exampleReducer from "./reducers/example.reducer";

// Combine all your reducers into a root reducer
const rootReducer = combineReducers({
  example: exampleReducer,
  // Add other reducers here
});

export default rootReducer;
