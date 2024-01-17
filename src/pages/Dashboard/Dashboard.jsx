import { Helmet } from "react-helmet-async";
import { PiArrowLeftBold, PiArrowRightBold, PiBookBold, PiEnvelopeBold, PiForkKnifeBold, PiHandbagBold, PiHouseBold, PiListBulletsBold, PiTextAlignJustifyBold, PiUsersBold } from "react-icons/pi";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "/tasty-food-logo.png";


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
                    <label htmlFor="my-drawer-2" className="bg-[#D1A054] absolute top-0 left-0 rounded-none btn drawer-button btn-ghost btn-outline btn-sm lg:hidden"><PiHouseBold /> <PiArrowRightBold /></label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="min-h-full p-4 menu w-80 bg-[#D1A054] text-base-content">
                        {/* Sidebar content here */}
                        <label htmlFor="my-drawer-2" className="absolute top-0 right-0 rounded-none btn drawer-button btn-sm lg:hidden"><PiArrowLeftBold /></label>
                        <div className="text-center">
                            <figure>
                                <img src={logo} className="w-6/12 mx-auto" alt="" />
                            </figure>

                        </div>
                        <li className="mt-10"><NavLink to="/dashboard"><PiHouseBold /> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/add-items"><PiForkKnifeBold /> Add Items</NavLink></li>
                        <li><NavLink to="/dashboard/manage-items"><PiListBulletsBold /> Manage Items</NavLink></li>
                        <li><NavLink to="/dashboard/manage-bookings"><PiBookBold /> Manage Bookings</NavLink></li>
                        <li><NavLink to="/dashboard/all-users"><PiUsersBold /> All Users</NavLink></li>
                        <p className="divider"></p>
                        <li><NavLink to="/"><PiHouseBold /> Home</NavLink></li>
                        <li><NavLink to="/menu"><PiTextAlignJustifyBold /> Menu</NavLink></li>
                        <li><NavLink to="/shop"><PiHandbagBold /> Shop</NavLink></li>
                        <li><NavLink to="/contact"><PiEnvelopeBold /> Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;