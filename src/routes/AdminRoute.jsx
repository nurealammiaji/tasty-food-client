import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AdminRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext);
    const [admin, adminLoading] = useAdmin();

    const location = useLocation();

    if (loading && adminLoading) {
        return <>
            <div className="w-screen mx-auto my-auto text-center">
                <br /><br />
                <p className="flex items-center justify-center gap-3 font-semibold text-red-600">
                    <span className="loading loading-spinner"></span>
                    Loading ...
                </p>
                <br /><br />
            </div>
        </>
    }

    if (!admin) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Access Denied !!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    if (user && admin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;