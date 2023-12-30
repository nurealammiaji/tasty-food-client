import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Slider from "./Slider";
import Menu from './Menu';
import MidBanner from './MidBanner';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <br /><br />
            <SectionHeading subHeading={"From 11:00am to 10:00pm"
            } heading={"ORDER ONLINE"}></SectionHeading>
            <br /><br />
            <Menu></Menu>
            <br /><br />
            <MidBanner></MidBanner>
        </div>
    );
};

export default Home;