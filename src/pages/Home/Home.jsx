import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Slider from "./Slider";
import MenuCard from "./MenuCard";
import MidBanner from './MidBanner';
import { Link } from "react-router-dom";
import MidSection from "./MidSection";
import Reviews from "./Reviews";
import MenuItem from "../../components/MenuItem/MenuItem";
import FoodCard from '../../components/FoodCard/FoodCard';
import { Helmet } from "react-helmet-async";
import useMenu from '../../hooks/useMenu';
import { useEffect, useState } from "react";


const Home = () => {

    const [menu] = useMenu();
    const [popular, setPopular] = useState();

    useEffect(() => {
        if (menu) {
            const popularItems = menu.filter(item => item.category === "popular");
            setPopular(popularItems);
        }
    }, [menu])

    return (
        <div>
            <Helmet>
                <title>Home || Tasty Food</title>
            </Helmet>
            <Slider></Slider>
            <br /><br />
            <SectionHeading subHeading={"From 11:00am to 10:00pm"
            } heading={"Order Online"}></SectionHeading>
            <br /><br />
            <MenuCard></MenuCard>
            <br /><br />
            <MidBanner></MidBanner>
            <SectionHeading subHeading={"Check It Out"} heading={"From Our Menu"}></SectionHeading>
            <br /><br />
            {
                (menu) ?
                    <div className="grid w-11/12 gap-10 mx-auto md:grid-cols-2">
                        {
                            (popular) &&
                            popular.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                        }
                        <br />
                    </div> :
                    <div className="text-center">
                        <br />
                        <p className="flex items-center justify-center gap-3 font-semibold text-red-600">
                            <span className="loading loading-spinner"></span>
                            Loading ...
                        </p>
                        <br /><br />
                    </div>
            }
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
            {
                (menu) ?
                    <div className="grid w-11/12 gap-10 mx-auto md:grid-cols-3">
                        {
                            (menu) &&
                            menu.slice(0, 3).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                        }
                        <br /><br />
                    </div> :
                    <div className="text-center">
                        <br />
                        <p className="flex items-center justify-center gap-3 font-semibold text-red-600">
                            <span className="loading loading-spinner"></span>
                            Loading ...
                        </p>
                        <br /><br />
                    </div>
            }
            <MidSection></MidSection>
            <br /><br />
            <SectionHeading subHeading={"What Our Clients Say"} heading={"Testimonials"}></SectionHeading>
            <br /><br />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;