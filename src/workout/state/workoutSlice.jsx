import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    workouts: JSON.parse(localStorage.getItem("workouts")) || [],
    sets: [],
    exercises: JSON.parse(localStorage.getItem("exercises")) || [],
  },
  reducers: {
    addWorkout: (state, action) => {
      const workout = action.payload;
      const checkWorkouts = state.workouts.find((val) => {
        return val.dayRepresentation === workout.dayRepresentation;
      });

      if (checkWorkouts) {
        toast.warn("Workout already added");
        return;
      }
      state.workouts.push({ ...workout });
      localStorage.setItem("workouts", JSON.stringify(state.workouts));
      toast.success("Workout added successfully");
    },

    addSet: (state, action) => {
      const set = action.payload;
      state.sets.push({ ...set });
    },

    addExercise: (state, action) => {
      const exercise = action.payload;
      const checkExercise = state.exercises.find((val) => {
        return val.exerciseName
          .toLowerCase()
          .includes(exercise.exerciseName.toLowerCase());
      });

      if (checkExercise) {
        toast.warn("Exercise already exists");
        return;
      }

      state.exercises.push({ ...exercise, id: nanoid() });
      localStorage.setItem("exercises", JSON.stringify(state.exercises));
      toast.success("Exercise added successfully");
    },

    deleteExerciseAction: (state, action) => {
      const exercise = action.payload;
      const deletedArr = state.exercises.filter((val) => {
        return val.id !== exercise.id;
      });

      localStorage.setItem("exercises", JSON.stringify(state.exercises));
      toast.warn("Exercise Deleted");
    },
  },
});

export const { addWorkout, addSet, addExercise, deleteExerciseAction } =
  workoutSlice.actions;
export default workoutSlice.reducer;
