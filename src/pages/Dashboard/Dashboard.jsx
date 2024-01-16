import { Helmet } from "react-helmet-async";
import { PiArrowRightBold, PiHouseBold } from "react-icons/pi";


const Dashboard = () => {
    return (
        <div className="w-screen">
            <Helmet>
                <title>Dashboard || Tasty Food</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-success drawer-button btn-ghost btn-outline rounded-none btn-sm lg:hidden absolute left-0 top-0">
                        <PiHouseBold /> <PiArrowRightBold /></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;