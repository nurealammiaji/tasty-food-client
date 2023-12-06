import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";


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
    }
])

export default Routes;