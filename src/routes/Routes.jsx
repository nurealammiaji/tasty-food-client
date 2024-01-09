import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from './../pages/Login/Login';
import Register from "../pages/Register/Register";
import OurMenu from "../pages/OurMenu/OurMenu";
import ContactUs from './../pages/ContactUs/ContactUs';
import OurShop from './../pages/OurShop/OurShop';
import Dashboard from './../pages/Dashboard/Dashboard';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "/shop",
                element: <OurShop></OurShop>
            },
            {
                path: "/shop/:category",
                element: <OurShop></OurShop>
            },
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    }
])

export default Routes;