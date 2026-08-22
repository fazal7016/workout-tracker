import React from "react";
import { useNavigate, useParams } from "react-router";
import useWorkout from "../../hooks/useWorkout";
import ExerciseCard from "../components/ExerciseCard";

const WorkoutDetails = () => {
  const { id } = useParams();
  const { workouts, navigate, deleteExercise } = useWorkout();
  const workout = workouts.find((val) => {
    return val.id === id;
  });

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#0C3B2E]">
      {/* Header */}
      <header className="border-b border-[#6D9773]/20 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="mb-5 text-sm font-medium text-[#6D9773] transition hover:text-[#0C3B2E] cursor-pointer"
          >
            ← Back to Workouts
          </button>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-[#6D9773]">
                {workout.day}
              </p>

              <h1 className="mt-1 text-3xl font-bold text-[#0C3B2E]">
                {workout.dayRepresentation}
              </h1>
            </div>

            <button
              onClick={() => navigate("/add-workout")}
              type="button"
              className="rounded-xl bg-[#FFBA00] px-5 py-3 text-sm font-bold text-[#0C3B2E] shadow-sm transition hover:brightness-95 cursor-pointer"
            >
              + Add Exercise
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Exercises */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold">Exercises</h2>

            <p className="mt-1 text-sm text-gray-500">
              Exercises performed during this workout
            </p>
          </div>

          <div className="space-y-4">
            {workout.exercises.map((elem) => {
              return (
                <ExerciseCard
                  key={elem.id}
                  exercise={elem}
                  onDelete={() => deleteExercise(workout.id, elem.id)}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkoutDetails;
