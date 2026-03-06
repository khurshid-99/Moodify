import { createBrowserRouter } from "react-router";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import Home from "../features/auth/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
