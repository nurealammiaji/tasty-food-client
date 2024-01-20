import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from './../pages/Login/Login';
import Register from "../pages/Register/Register";
import OurMenu from "../pages/OurMenu/OurMenu";
import ContactUs from './../pages/ContactUs/ContactUs';
import OurShop from './../pages/OurShop/OurShop';
import Private from './Private';
import Dashboard from './../pages/Dashboard/Dashboard';
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AddItems from '../pages/Dashboard/Admin/AddItems';
import ManageItems from '../pages/Dashboard/Admin/ManageItems';
import ManageBookings from '../pages/Dashboard/Admin/ManageBookings';
import AllUsers from '../pages/Dashboard/Admin/AllUsers';
import MyCart from '../pages/Dashboard/User/MyCart';
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem";


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
                path: "admin-home",
                element: <AdminHome></AdminHome>
            },
            {
                path: "add-items",
                element: <AddItems></AddItems>
            },
            {
                path: "manage-items",
                element: <ManageItems></ManageItems>
            },
            {
                path: "manage-items/:id",
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`http://localhost:5000/carts/${params.id}`)
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