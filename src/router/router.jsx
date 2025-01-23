import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import Section from "../pages/section";

const router = createBrowserRouter([
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
        path: "/section",
        element: <Section />
    }
])


export default router
