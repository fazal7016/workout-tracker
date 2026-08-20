import React, { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const useWorkout = () => {
  const monthArr = [
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
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const date = today.getDate();
  const month = monthArr[today.getMonth()];
  const year = today.getFullYear();
  const day = dayArr[today.getDay()];

  const dayRepresentation = `${date} ${month} ${year}`;

  const [workouts, setWorkouts] = useState(
    JSON.parse(localStorage.getItem("workouts")) || [],
  );
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises")) || [],
  );

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
      });

      if (checkWorkout) {
        toast.warn("Workout already added");
        return prevWorkout;
      }

      const newWorkout = { dayRepresentation, id: nanoid(), exercises, day };
      const updatedWorkouts = [...prevWorkout, newWorkout];

      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      toast.success("Workout added successfully");

      return updatedWorkouts;
    });
  };

  const [sets, setSets] = useState([]);

  const addSetfunc = () => {
    setSets((prev) => [...prev, { id: nanoid(), weight: "", reps: "" }]);
  };

  const getExerciseData = (data) => {
    setExercises((prevExercise) => {
      const checkExercise = prevExercise.find((val) => {
        return val.exerciseName
          .toLowerCase()
          .includes(data.exerciseName.toLowerCase());
      });

      if (checkExercise) {
        toast.warn("Exercise already exists");
        return prevExercise;
      }

      const newExercise = { ...data, id: nanoid() };
      const updatedExercise = [...prevExercise, newExercise];

      localStorage.setItem("exercises", JSON.stringify(updatedExercise));
      toast.success("Exercise added successfully");

      return updatedExercise;
    });

    navigate(-1);
    reset();
  };

  const deleteExercise = (exercise) => {
    const deletedArr = exercises.filter((val) => {
      return val.id !== exercise.id;
    });
    setExercises(deletedArr);
    localStorage.setItem("exercises", JSON.stringify(deletedArr));
    toast.warn("Exercise Deleted")
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
