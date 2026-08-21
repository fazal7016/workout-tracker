import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from "../../workout/state/workoutSlice";

export const store = configureStore({
  reducer: {
    workout: workoutReducer,
  },
});
