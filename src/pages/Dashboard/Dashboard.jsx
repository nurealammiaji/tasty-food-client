import { Helmet } from "react-helmet-async";
import { PiArrowLeftBold, PiArrowRightBold, PiHouseBold } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="w-screen">
            <Helmet>
                <title>Dashboard || Tasty Food</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col items-center justify-center drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="absolute top-0 left-0 rounded-none btn btn-success drawer-button btn-ghost btn-outline btn-sm lg:hidden"><PiHouseBold /> <PiArrowRightBold /></label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <label htmlFor="my-drawer-2" className="absolute top-0 right-0 rounded-none btn btn-success drawer-button btn-ghost btn-outline btn-sm lg:hidden"><PiArrowLeftBold /> <PiHouseBold /></label>
                        <div className="absolute top-0 left-0 rounded-none btn btn-ghost">
                            <p className="text-lg font-semibold text-success">Dashboard</p>
                        </div>
                        <li className="mt-10"><Link to="/dashboard/cart">My Cart</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;