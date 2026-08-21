import React, { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addExercise,
  addSet,
  addWorkout,
  deleteExerciseAction,
} from "../state/workoutSlice";

const useWorkout = () => {
  const monthArr = [
    //month array because the Date object gives number
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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

  const today = new Date(); //gets the current date
  const date = today.getDate();
  const month = monthArr[today.getMonth()]; //using array to get month
  const year = today.getFullYear();
  const day = dayArr[today.getDay()]; //using array to get day

  const dayRepresentation = `${date} ${month} ${year}`;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exerciseName: "",
      sets: 0,
      weight: 0,
      reps: 0,
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addWorkoutfunc = () => {
    const workout = { dayRepresentation, id: nanoid(), day };
    dispatch(addWorkout(workout));
  };

  const addSetfunc = () => {
    //function for creating new set
    const set = { id: nanoid(), weight: "", reps: "" };
    dispatch(addSet(set));
  };

  const getExerciseData = (data) => {
    const exercise = { ...data };
    dispatch(addExercise(exercise));
    navigate(-1); //after adding a exercise go back to exercise page
    reset();
  };

  const deleteExercise = (exercise) => {
    dispatch(deleteExerciseAction(exercise));
  };

  return {
    day,
    addWorkoutfunc,
    navigate,
    register,
    handleSubmit,
    errors,
    getExerciseData,
    addSetfunc,
    deleteExercise,
  };
};

export default useWorkout;
