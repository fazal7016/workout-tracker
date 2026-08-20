import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const WorkoutCard = ({ singleWorkout, day, navigate }) => {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border border-[#6D9773]/20
        bg-white
        p-4
        shadow-sm
        transition duration-200
        hover:-translate-y-1
        hover:border-[#6D9773]
        hover:shadow-lg
        sm:p-5
        md:w-[calc(50%-12px)]
        lg:w-[calc(33.333%-16px)]
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-[#0C3B2E] sm:text-2xl">
            {singleWorkout.dayRepresentation}
          </h1>

          <p className="mt-1 text-sm text-[#6D9773] sm:text-base">
            {day}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[#FFBA00]/20 px-2.5 py-1 text-xs font-medium text-[#8A6500]">
          Workout
        </span>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-200 pt-4 sm:mt-6 sm:pt-5">
        <p className="text-sm text-gray-500 sm:text-base">
          <span className="font-semibold text-[#0C3B2E]">
            {singleWorkout.exercises.length}
          </span>{" "}
          Exercises
        </p>

        <button
          type="button"
          onClick={() =>
            navigate(`/workout-detail/${singleWorkout.id}`)
          }
          className="group flex shrink-0 cursor-pointer items-center gap-1 text-sm font-semibold text-[#BB8A52]"
        >
          View
          <MdOutlineArrowRightAlt className="text-lg transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;