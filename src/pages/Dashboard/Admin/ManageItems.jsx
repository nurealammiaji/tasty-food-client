import { Helmet } from "react-helmet-async";
import SectionHeading from '../../../components/SectionHeading/SectionHeading';


const ManageItems = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"Hurry Up"} heading={"Manage All Items"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default ManageItems;