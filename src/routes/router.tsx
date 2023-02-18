import React from "react";
import { createBrowserRouter } from "react-router-dom";
import StoreTest from "components/StoreTest/StoreTest";
import ErrorPage from "routes/pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreTest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <h1>Dynamic page</h1>,
    errorElement: <ErrorPage />,
  },
]);
