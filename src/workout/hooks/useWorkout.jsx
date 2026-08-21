import React, { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

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

  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts")) || [],
  );
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises")) || [],
  );
  const [currentWorkoutExercises, setCurrentWorkoutExercises] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const addWorkoutfunc = () => {
    setWorkouts((prevWorkout) => {
      const checkWorkout = prevWorkout.find((val) => {
        return val.dayRepresentation === dayRepresentation;
      }); // check that if workout for that day exists or not

      if (checkWorkout) {
        // if workout exists then give warning
        toast.warn("Workout already added");
        return prevWorkout;
      }

      const newWorkout = {
        dayRepresentation,
        id: nanoid(),
        exercises: currentWorkoutExercises,
        day,
      };
      const updatedWorkouts = [...prevWorkout, newWorkout];

      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      toast.success("Workout added successfully");

      return updatedWorkouts;
    });
    setCurrentWorkoutExercises([]);
  };

  const [sets, setSets] = useState([]);

  const addSetfunc = () => {
    //function for creating new set
    setSets((prev) => [...prev, { id: nanoid(), weight: "", reps: "" }]);
  };

  const getExerciseData = (data) => {
    setExercises((prevExercise) => {
      const checkExercise = prevExercise.find((val) => {
        return val.exerciseName //check if same exercise already exists
          .toLowerCase() // checking based on exercise name
          .includes(data.exerciseName.toLowerCase());
      });

      if (checkExercise) {
        //if exercise exists then give warning
        toast.warn("Exercise already exists");
        return prevExercise;
      }

      const newExercise = { ...data, id: nanoid() };
      const updatedExercise = [...prevExercise, newExercise];

      localStorage.setItem("exercises", JSON.stringify(updatedExercise));
      toast.success("Exercise added successfully");

      return updatedExercise;
    });

    navigate(-1); //after adding a exercise go back to exercise page
    reset();
  };

  const deleteExercise = (exercise) => {
    const deletedArr = exercises.filter((val) => {
      return val.id !== exercise.id; // filtering array with no matching ids so it will delete the exercise
    });
    setExercises(deletedArr);
    localStorage.setItem("exercises", JSON.stringify(deletedArr));
    toast.warn("Exercise Deleted");
  };

  return {
    workouts,
    day,
    addWorkoutfunc,
    navigate,
    register,
    handleSubmit,
    errors,
    getExerciseData,
    sets,
    addSetfunc,
    exercises,
    deleteExercise,
  };
};

export default useWorkout;
