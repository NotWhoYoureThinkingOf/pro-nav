import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cureResinReducer from "../features/cureResin/cureResinSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cureResin: cureResinReducer,
  },
});
