import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "routes/pages/ErrorPage/ErrorPage";
import AuthPage from "routes/pages/AuthPage/AuthPage";
import RoomPage from "routes/pages/RoomPage/RoomPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <RoomPage />,
    errorElement: <ErrorPage />,
  },
]);
