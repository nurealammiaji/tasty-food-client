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
import Private from './Private';
import MyCart from '../pages/Dashboard/MyCart';
import AddItems from '../pages/Dashboard/AddItems';
import ManageItmes from "../pages/Dashboard/ManageItems";
import ManageItems from "../pages/Dashboard/ManageItems";
import ManageBookings from "../pages/Dashboard/ManageBookings";
import AllUsers from "../pages/Dashboard/AllUsers";


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
    },
    {
        path: "dashboard",
        element: <Private><Dashboard></Dashboard></Private>,
        children: [
            {
                path: "add-items",
                element: <AddItems></AddItems>
            },
            {
                path: "manage-items",
                element: <ManageItems></ManageItems>
            },
            {
                path: "manage-bookings",
                element: <ManageBookings></ManageBookings>
            },
            {
                path: "all-users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "cart",
                element: <MyCart></MyCart>
            }
        ]
    }
])

export default Routes;