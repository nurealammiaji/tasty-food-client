import PageHeading from "../../components/PageHeading/PageHeading";
import shopBG from "../../assets/shop/banner2.jpg";


const OurShop = () => {
    return (
        <div>
            <PageHeading background={shopBG} heading={"Our Shop"} subHeading={"Would you like to try a new dish ?"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default OurShop;