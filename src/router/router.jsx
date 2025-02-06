import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import Room from "../pages/Room";
import Section from "../pages/Section";
import MainLayout from "../layout/mainlayout";
import Teacher from "../pages/Teacher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/homepage",
            element: <Homepage />
        },
        {
            path: "/room",
            element: <Room />
        },
        {
            path: "/section",
            element: <Section />
        },
        {
            path: "/teacher",
            element: <Teacher />
        }
    ]
    
  }
])


export default router
