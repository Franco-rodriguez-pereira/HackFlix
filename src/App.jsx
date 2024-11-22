import React, { useState } from "react";
import "./App.css";
import Home from "./web/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Recommend } from "@mui/icons-material";
import Recommendation from "./components/Recommendation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Recommendation",
      element: <Recommendation />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
