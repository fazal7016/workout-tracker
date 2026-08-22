import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Dashboard from "../../workout/ui/pages/Dashboard";
import AddForm from "../../workout/ui/pages/AddForm";
import WorkoutDetails from "../../workout/ui/pages/WorkoutDetails";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/workout-detail/:id",
      element: <WorkoutDetails />,
    },
    {
      path: "/add-workout",
      element: <AddForm />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
