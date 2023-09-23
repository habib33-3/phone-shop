import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },

      {
        path:"/login",
        element:<Login/>,
      }
    ],
  },
]);

export default Route;
