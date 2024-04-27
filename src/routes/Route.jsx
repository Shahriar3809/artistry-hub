
import { createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllArtNCraft from "../pages/AllArtNCraft";
import PrivateRoutes from "../components/PrivateRoutes";
import AddCraft from "../pages/AddCraft";
import MyCraft from "../pages/MyCraft";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import UpdateCraft from "../pages/UpdateCraft";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () => fetch("http://localhost:5001/crafts"),
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
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <Details></Details>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/details/${params.id}`),
      },
    ],
  },
]);


export default router;