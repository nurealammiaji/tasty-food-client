import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Slider from "./Slider";
import MenuCard from "./MenuCard";
import MidBanner from './MidBanner';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MidSection from "./MidSection";
import Reviews from "./Reviews";
import MenuItem from "../../components/MenuItem/MenuItem";
import FoodCard from '../../components/FoodCard/FoodCard';


const Home = () => {

    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    return (
        <div>
            <Slider></Slider>
            <br /><br />
            <SectionHeading subHeading={"From 11:00am to 10:00pm"
            } heading={"Order Online"}></SectionHeading>
            <br /><br />
            <MenuCard></MenuCard>
            <br /><br />
            <MidBanner></MidBanner>
            <SectionHeading subHeading={"Check it out"} heading={"From Our Menu"}></SectionHeading>
            <br /><br />
            <div className="grid w-11/12 gap-10 mx-auto md:grid-cols-2">
                {
                    (menu) &&
                    menu.splice(0, 6).map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
                <br />
            </div>
            <div className="text-center">
                <Link to="/menu">
                    <button className="p-3 uppercase border-b-2 border-black rounded-lg hover:btn-outline">View Full Menu</button>
                </Link>
            </div>
            <br /><br />
            <div className="w-11/12 py-20 mx-auto text-center bg-black">
                <h2 className="text-5xl font-semibold text-white">Call Us: +880 123456789</h2>
            </div>
            <br /><br />
            <SectionHeading subHeading={"Should Try"} heading={"Chef Recommends"}></SectionHeading>
            <br /><br />
            <div className="grid w-11/12 gap-10 mx-auto md:grid-cols-3">
                {
                    (menu) &&
                    menu.slice(0,3).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
                <br /><br />
            </div>
            <MidSection></MidSection>
            <br /><br />
            <SectionHeading subHeading={"What Our Clients Say"} heading={"Testimonials"}></SectionHeading>
            <br /><br />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;