import React from "react";

const DashboardHeader = () => {
  return (
    <div className="my-5 flex w-full items-center px-4 sm:my-6 sm:px-6 lg:my-7 lg:px-10 xl:px-16">
      <div>
        <h1 className="text-xl font-bold text-[#0C3B2E] sm:text-2xl">
          Your Workouts
        </h1>

        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Select a workout to view its exercises
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;