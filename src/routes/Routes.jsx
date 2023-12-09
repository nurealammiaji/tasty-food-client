import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Login from './../components/Login/Login';
import Register from "../components/Register/Register";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
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