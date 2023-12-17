import PageHeading from "../../components/PageHeading/PageHeading";
import contactBG from "../../assets/contact/banner.jpg";


const ContactUs = () => {
    return (
        <div>
            <PageHeading background={contactBG} heading={"Contact Us"} subHeading={"Would you like to try a dish?"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default ContactUs;