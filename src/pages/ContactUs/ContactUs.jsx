import PageHeading from "../../components/PageHeading/PageHeading";
import contactBG from "../../assets/contact/banner.jpg";
import { Helmet } from "react-helmet-async";


const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact || Tasty Food</title>
            </Helmet>
            <PageHeading background={contactBG} heading={"Contact Us"} subHeading={"Would you like to try a dish?"} width={"md:py-20 md:px-40"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default ContactUs;