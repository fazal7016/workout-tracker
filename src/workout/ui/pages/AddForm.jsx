import React, { useState } from "react";
import { useParams } from "react-router";
import useWorkout from "../../hooks/useWorkout";
import { nanoid } from "nanoid";
import Set from "../components/Set";
import { BsPlus } from "react-icons/bs";

const AddForm = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    getExerciseData,
    addSetfunc,
    sets,
  } = useWorkout();

  return (
    <div className="min-h-screen bg-[#F7F8F5] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="mb-5 text-sm font-medium text-[#6D9773] hover:text-[#0C3B2E] cursor-pointer"
          >
            ← Back to Exercises
          </button>

          <p className="text-sm font-medium text-[#6D9773]">
            {/* {workout?.day} · {workout?.dayRepresentation} */}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#0C3B2E]">
            Add Exercise
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add an exercise and record the weight and reps for each set.
          </p>
        </div>

        {/* Main Card */}
        <form
          onSubmit={handleSubmit(getExerciseData)}
          className="rounded-3xl border border-[#6D9773]/20 bg-white p-5 shadow-sm sm:p-8"
        >
          {/* Exercise Name */}
          <div>
            <label
              htmlFor="exerciseName"
              className="mb-2 block text-sm font-semibold text-[#0C3B2E]"
            >
              Exercise Name
            </label>

            <input
              {...register("exerciseName", {
                required: "Please enter name of exercise",
              })}
              id="exerciseName"
              type="text"
              placeholder="e.g. Bench Press"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#6D9773] focus:bg-white focus:ring-4 focus:ring-[#6D9773]/10"
            />
            {errors.exerciseName && (
              <p className="text-red-500">{errors.exerciseName.message}</p>
            )}
          </div>

          {/* Sets Header */}
          <div className="mt-8 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-[#0C3B2E]">
                Exercise Sets
              </h2>

              <p className="mt-1 text-sm text-gray-500 hidden min-[400px]:inline">
                Record your performance for each set.
              </p>
            </div>

            <button
              onClick={addSetfunc}
              type="button"
              className="flex shrink items-center justify-center gap-3 rounded-xl border-2 border-[#0C3B2E] bg-[#0C3B2E] px-3 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-[#0C3B2E] sm:px-4 sm:py-3"
            >
              <BsPlus className="flex shrink text-xl" />
              <span className="whitespace-nowrap">Add Set</span>
            </button>
          </div>

          {/* Sets */}
          {sets.map((val, index) => {
            return (
              <Set
                key={val.id}
                set={val}
                index={index}
                register={register}
                errors={errors}
              />
            );
          })}

          {/* Divider */}
          <div className="my-8 border-t border-gray-100" />

          {/* Actions */}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="submit"
              className="rounded-xl bg-[#FFBA00] px-7 py-3 text-sm font-bold text-[#0C3B2E] transition hover:brightness-95 cursor-pointer"
            >
              Save Exercise
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
