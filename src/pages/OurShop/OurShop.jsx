import PageHeading from "../../components/PageHeading/PageHeading";
import shopBG from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";


const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Shop || Tasty Food</title>
            </Helmet>
            <PageHeading background={shopBG} heading={"Our Shop"} subHeading={"Would you like to try a new dish ?"} width={"md:py-20 md:px-40"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default OurShop;