import { createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import Homepage from "./homepage";

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
    }
])


export default router
