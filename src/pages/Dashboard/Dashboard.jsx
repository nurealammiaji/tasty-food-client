import PageHeading from "../../components/PageHeading/PageHeading";
import dashboardBG from "../../assets/dashboard/image-5.jpg";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard || Tasty Food</title>
            </Helmet>
            <PageHeading background={dashboardBG} heading={"Dashboard"} subHeading={"Would you like to try a dish?"} width={"md:py-20 md:px-40"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default Dashboard;