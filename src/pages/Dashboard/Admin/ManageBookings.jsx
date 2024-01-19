import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";


const ManageBookings = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Bookings || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"At a Glance !"} heading={"Manage All Bookings"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;