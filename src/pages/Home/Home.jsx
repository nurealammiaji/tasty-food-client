import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Slider from "./Slider";
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <br /><br />
            <SectionHeading subHeading={"From 11:00am to 10:00pm"
            } heading={"ORDER ONLINE"}></SectionHeading>
            <br /><br />
            <Menu></Menu>
            <br />
        </div>
    );
};

export default Home;