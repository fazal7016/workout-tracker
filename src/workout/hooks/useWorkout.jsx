import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const dayArr = [
  //day array because the Date object gives number
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const useWorkout2 = () => {
  const currentDay = new Date();
  const day = dayArr[currentDay.getDay()];
  const date = currentDay.getDate();
  const month = currentDay.toLocaleString("en", { month: "short" });
  const year = currentDay.getFullYear();
  const dayRepresentation = `${date} ${month} ${year}`;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts")) || [],
  );
  const [workoutSet, setWorkoutSet] = useState([]);

  const createWorkout = () => {
    setWorkouts((prevWorkout) => {
      const checkWorkout = prevWorkout.find((val) => {
        return val.dayRepresentation === dayRepresentation;
      });

      if (checkWorkout) {
        toast.error("Workout already exists");
        return prevWorkout;
      }

      const newWorkout = {
        day,
        dayRepresentation,
        exercises: [],
        id: nanoid(),
      };

      const updatedWorkout = [...prevWorkout, newWorkout];
      toast.success("Workout added successfully");
      localStorage.setItem("workouts", JSON.stringify(updatedWorkout));
      return updatedWorkout;
    });
  };

  const addNewSet = () => {
    setWorkoutSet((prev) => [...prev, { id: nanoid(), weight: "", reps: "" }]);
  };

  const handleExerciseData = (data) => {
    const newExercise = {
      id: nanoid(),
      name: data.exerciseName,
      set: data.set,
    };

    setWorkouts((prevWorkout) => {
      const updateWorkouts = prevWorkout.map((elem) => {
        if (elem.dayRepresentation !== dayRepresentation) {
          return elem;
        }
        return { ...elem, exercises: [...elem.exercises, newExercise] };
      });
      localStorage.setItem("workouts", JSON.stringify(updateWorkouts));
      return updateWorkouts;
    });
    setWorkoutSet([]);
    reset();
    navigate(-1);
  };

  const deleteExercise = (workoutId, exerciseId) => {
    setWorkouts((prevWorkout) => {
      const updatedWorkout = prevWorkout.map((workout) => {
        if (workout.id !== workoutId) {
          return workout;
        }

        return {
          ...workout,
          exercises: workout.exercises.filter((val) => {
            return val.id !== exerciseId;
          }),
        };
      });
      localStorage.setItem("workouts", JSON.stringify(updatedWorkout));
      toast.error("Exercise deleted");
      return updatedWorkout;
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    createWorkout,
    workouts,
    handleExerciseData,
    addNewSet,
    workoutSet,
    deleteExercise,
  };
};

export default useWorkout2;
