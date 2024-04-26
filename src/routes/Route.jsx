
import { createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllArtNCraft from "../pages/AllArtNCraft";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-items",
        element: <AllArtNCraft></AllArtNCraft>
      },
    ],
  },
]);


export default router;