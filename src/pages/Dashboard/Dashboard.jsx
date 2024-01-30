import { Helmet } from "react-helmet-async";
import { PiArrowLeftBold, PiArrowRightBold, PiBookBold, PiCalendarBold, PiCalendarCheckBold, PiEnvelopeSimpleBold, PiForkKnifeBold, PiHandbagBold, PiHouseBold, PiListBulletsBold, PiQuotesBold, PiShoppingCartBold, PiTextAlignJustifyBold, PiUsersThreeBold, PiWalletBold } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import logo from "/tasty-food-logo.png";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {

    const [admin] = useAdmin();
    console.log(admin);

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
                    <ul className="min-h-full p-4 menu w-80 bg-[#D1A054] text-lg">
                        {/* Sidebar content here */}
                        <label htmlFor="my-drawer-2" className="absolute top-0 right-0 rounded-none btn drawer-button btn-sm lg:hidden"><PiArrowLeftBold /></label>
                        <div className="text-center">
                            <figure>
                                <img src={logo} className="w-6/12 mx-auto" alt="" />
                            </figure>
                        </div>
                        {
                            (admin) ?
                                <>
                                    <li className="mt-10 hover:text-white"><NavLink to="/dashboard/admin-home"><PiHouseBold /> Admin Home</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/add-items"><PiForkKnifeBold /> Add Items</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/manage-items"><PiListBulletsBold /> Manage Items</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/manage-bookings"><PiBookBold /> Manage Bookings</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/all-users"><PiUsersThreeBold /> All Users</NavLink></li>
                                    <div className="divider"></div>
                                    <li className="hover:text-white"><NavLink to="/"><PiHouseBold /> Home</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/menu"><PiTextAlignJustifyBold /> Menu</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/shop"><PiHandbagBold /> Shop</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/contact"><PiEnvelopeSimpleBold /> Contact</NavLink></li>
                                </> :
                                <>
                                    <li className="mt-10 hover:text-white"><NavLink to="/dashboard/user-home"><PiHouseBold /> User Home</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/reservation"><PiCalendarBold /> Reservation</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/payment-history"><PiWalletBold /> Payment History</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/my-cart"><PiShoppingCartBold /> My Cart</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/add-review"><PiQuotesBold/> Add Review</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/dashboard/my-bookings"><PiCalendarCheckBold /> My Bookings</NavLink></li>
                                    <div className="divider"></div>
                                    <li className="hover:text-white"><NavLink to="/"><PiHouseBold /> Home</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/menu"><PiTextAlignJustifyBold /> Menu</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/shop"><PiHandbagBold /> Shop</NavLink></li>
                                    <li className="hover:text-white"><NavLink to="/contact"><PiEnvelopeSimpleBold /> Contact</NavLink></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;