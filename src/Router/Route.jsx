import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../pages/Phone/Phone";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/phones.json"),
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader: () => fetch(`/phones.json`),
      },
    ],
  },
]);

export default Route;
