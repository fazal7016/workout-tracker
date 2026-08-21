import React from "react";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import WorkoutCard from "../components/WorkoutCard";
import useWorkout from "../../hooks/useWorkout";

const Dashboard = () => {
  const { workouts, day, addWorkoutfunc, navigate, exercises } = useWorkout();
  return (
    <div className="bg-[#F7F8F5] min-h-screen">
      <Navbar addWorkoutfunc={addWorkoutfunc} />
      <DashboardHeader />
      <div className="flex w-full flex-wrap gap-4 px-4 sm:gap-5 sm:px-6 lg:gap-6 lg:px-10 xl:px-16">
        {workouts.map((elem) => {
          return (
            <WorkoutCard
              key={elem.id}
              singleWorkout={elem}
              day={day}
              navigate={navigate}
              exercises={exercises}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
