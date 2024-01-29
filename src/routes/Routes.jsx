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
import UserHome from "../pages/Dashboard/User/UserHome";
import Reservation from "../pages/Dashboard/User/Reservation";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory";
import AddReview from "../pages/Dashboard/User/AddReview";
import MyBookings from '../pages/Dashboard/User/MyBookings';
import AdminRoute from "./AdminRoute";


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
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "add-items",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "manage-items",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "manage-items/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menus/${params.id}`)
            },
            {
                path: "manage-bookings",
                element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
            },
            {
                path: "all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "add-review",
                element: <AddReview></AddReview>
            },
            {
                path: "my-bookings",
                element: <MyBookings></MyBookings>
            }
        ]
    }
])

export default Routes;