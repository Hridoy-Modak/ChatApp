import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
]);

const App = () => {
  
  return (
    <RouterProvider router={router} />
  )
};

export default App;
