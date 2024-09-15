import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import LoginRegister from "../Layout/LoginRegister";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        element:<HomeLayout />,
        path:"/",
        children:[{
            index:true,
            element:<HomePage />
        },{
            path:"dashboard",
            element:<Dashboard />
        }]
    },
    {
        element:<LoginRegister />,
        path:"authenticate",
        children:[{
           index:true,
           element:<Login />,
        },{
            path:"register",
            element:<Register />
        }]
    }
])


export default router