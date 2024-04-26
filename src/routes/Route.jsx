
import { createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllArtNCraft from "../pages/AllArtNCraft";
import PrivateRoutes from "../components/PrivateRoutes";
import AddCraft from "../pages/AddCraft";
import MyCraft from "../pages/MyCraft";
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
        element: <AllArtNCraft></AllArtNCraft>,
      },
      {
        path: "/add-craft",
        element: (
          <PrivateRoutes>
            <AddCraft></AddCraft>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-craft",
        element: (
          <PrivateRoutes>
            <MyCraft></MyCraft>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);


export default router;