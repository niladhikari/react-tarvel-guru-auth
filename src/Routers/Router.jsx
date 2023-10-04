import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Roots/Root";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Travel from "../Pages/Home/Travel";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('/data.json'),
        },
        {
            path: '/news',
            element:<News></News>
        },
        {
            path: '/travel/:id',
            element:<PrivateRouter><Travel></Travel></PrivateRouter>,
            loader: () => fetch('/data.json'),
        },
        {
            path: '/login',
            element:<Login></Login>,
         
        },
        {
            path: '/register',
            element:<Register></Register>,
        },
      ]
    },
  ]);

export default router;