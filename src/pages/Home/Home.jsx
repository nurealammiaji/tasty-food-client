import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <br /><br />
            <SectionHeading subHeading={"From 11:00am to 10:00pm"
            } heading={"ORDER ONLINE"}></SectionHeading>
        </div>
    );
};

export default Home;