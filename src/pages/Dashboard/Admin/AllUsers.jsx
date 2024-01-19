import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";


const AllUsers = () => {
    return (
        <div>
            <Helmet>
                <title>All Users || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"How Many ??"} heading={"Manage All Users"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllUsers;