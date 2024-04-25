
import { createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Root from "../pages/Root";
import Login from "../pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  },
]);


export default router;