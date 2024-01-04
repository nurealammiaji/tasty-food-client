import PageHeading from './../../components/PageHeading/PageHeading';
import menuBG from '../../assets/menu/banner3.jpg';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import useMenu from '../../hooks/useMenu';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../../components/MenuItem/MenuItem';
import dessertBG from '../../assets/menu/dessert-bg.jpeg';

const OurMenu = () => {

    const [menu] = useMenu();
    const [popular, setPopular] = useState();
    const [salads, setSalads] = useState();
    const [pizzas, setPizzas] = useState();
    const [soups, setSoups] = useState();
    const [desserts, setDesserts] = useState();
    const [drinks, setDrinks] = useState();


    useEffect(() => {
        if (menu) {
            const popularItems = menu.filter(item => item.category === "popular");
            setPopular(popularItems);
            const saladItems = menu.filter(item => item.cateroy === "salad");
            setSalads(saladItems);
            const pizzaItems = menu.filter(item => item.category === "pizza");
            setPizzas(pizzaItems);
            const soupItems = menu.filter(item => item.category === "soup");
            setSoups(soupItems);
            const dessertItems = menu.filter(item => item.category === "dessert");
            setDesserts(dessertItems);
            const drinkItems = menu.filter(item => item.category === "drinks");
            setDrinks(drinkItems);
        }
    }, [menu])
    
    return (
        <div>
            <Helmet>
                <title>Menu || Tasty Food</title>
            </Helmet>
            {/* Popular Menu */}
            <div>
                <PageHeading background={menuBG} heading={"Our Menu"} subHeading={"Would you like to try a dish?"}></PageHeading>
                <br /><br />
                <SectionHeading subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionHeading>
                <br /><br />
                {
                    (menu && popular) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (popular) &&
                                popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
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
                <br /><br />
                <div className="text-center">
                    <Link to="">
                        <button className="p-3 uppercase border-b-2 border-black rounded-lg hover:btn-outline">Order Your Favorite Food</button>
                    </Link>
                </div>
            </div>
            <br /><br />
            {/* Desserts Menu */}
            <div>
                <PageHeading background={dessertBG} heading={"Desserts"} subHeading={"Would you like to try a dish?"}></PageHeading>
                <br /><br />
                {
                    (menu && desserts) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (desserts) &&
                                desserts.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
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
                <br /><br />
                <div className="text-center">
                    <Link to="">
                        <button className="p-3 uppercase border-b-2 border-black rounded-lg hover:btn-outline">Order Your Favorite Food</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;