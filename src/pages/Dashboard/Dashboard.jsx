import PageHeading from "../../components/PageHeading/PageHeading";
import dashboardBG from "../../assets/dashboard/image-5.jpg";


const Dashboard = () => {
    return (
        <div>
            <PageHeading background={dashboardBG} heading={"Dashboard"} subHeading={"Would you like to try a dish?"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default Dashboard;