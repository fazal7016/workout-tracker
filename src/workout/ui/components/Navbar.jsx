import React from "react";
import { BsPlus } from "react-icons/bs";

const Navbar = ({ addWorkoutfunc }) => {
  return (
    <nav className="w-full border-b border-[#6D9773]/20 bg-white">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10 xl:px-16">
        
        {/* Logo / Heading */}
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-[#0C3B2E] sm:text-2xl lg:text-3xl">
            Workout Tracker
          </h1>

          <p className="mt-0.5 hidden text-sm text-gray-500 sm:block">
            Track your workout and progress
          </p>
        </div>

        {/* Add Workout Button */}
        <button
          onClick={addWorkoutfunc}
          type="button"
          className="flex shrink-0 items-center justify-center gap-1.5 rounded-xl border-2 border-[#0C3B2E] bg-[#0C3B2E] px-3 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-[#0C3B2E] sm:px-4 sm:py-3"
        >
          <BsPlus className="text-xl" />
          <span>Add Workout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;