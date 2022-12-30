import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login/Login";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
