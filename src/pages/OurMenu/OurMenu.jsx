import PageHeading from './../../components/PageHeading/PageHeading';
import menuBG from '../../assets/menu/banner3.jpg';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import useMenu from '../../hooks/useMenu';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../../components/MenuItem/MenuItem';
import dessertBG from '../../assets/menu/dessert-bg.jpeg';
import pizzaBG from '../../assets/menu/pizza-bg.jpg';
import saladBG from '../../assets/menu/salad-bg.jpg';
import soupBG from '../../assets/menu/soup-bg.jpg';

const OurMenu = () => {

    const [menu] = useMenu();
    const [offered, setOffered] = useState();
    const [salads, setSalads] = useState();
    const [pizzas, setPizzas] = useState();
    const [soups, setSoups] = useState();
    const [desserts, setDesserts] = useState();
    const [drinks, setDrinks] = useState();


    useEffect(() => {
        if (menu) {
            const offeredItems = menu.filter(item => item.category === "offered");
            setOffered(offeredItems);
            const saladItems = menu.filter(item => item.category === "salad");
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
    }, [menu]);

    const spinner = <>
        <div className="text-center">
            <br />
            <p className="flex items-center justify-center gap-3 font-semibold text-red-600">
                <span className="loading loading-spinner"></span>
                Loading ...
            </p>
            <br /><br />
        </div>
    </>

    const orderButton = <>
        <button className="p-3 uppercase border-b-2 rounded-lg border-slate-800 hover:bg-slate-800 hover:text-white">Order Your Favorite Food</button>
    </>

    return (
        <div>
            <Helmet>
                <title>Menu || Tasty Food</title>
            </Helmet>
            {/* Popular Menu */}
            <div>
                <PageHeading background={menuBG} heading={"Our Menu"} subHeading={"Would you like to try a dish?"} width={"md:py-20 md:px-40"}></PageHeading>
                <br /><br />
                <SectionHeading subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionHeading>
                <br /><br />
                {
                    (menu && offered) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (offered) &&
                                offered.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                        </div> : spinner
                }
                <br /><br />
                <div className="text-center">
                    <Link to="/shop">
                        {orderButton}
                    </Link>
                </div>
            </div>
            <br /><br />
            {/* Salads Menu */}
            <div>
                <PageHeading background={saladBG} heading={"Salads"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} width={'w-8/12'}></PageHeading>
                <br /><br />
                {
                    (menu && salads) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (salads) &&
                                salads.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                        </div> : spinner
                }
                <br /><br />
                <div className="text-center">
                    <Link to="/shop/salads">
                        {orderButton}
                    </Link>
                </div>
            </div>
            <br /><br />
            {/* Pizzas Menu */}
            <div>
                <PageHeading background={pizzaBG} heading={"Pizzas"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} width={'w-8/12'}></PageHeading>
                <br /><br />
                {
                    (menu && pizzas) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (pizzas) &&
                                pizzas.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                        </div> : spinner
                }
                <br /><br />
                <div className="text-center">
                    <Link to="/shop/pizzas">
                        {orderButton}
                    </Link>
                </div>
            </div>
            <br /><br />
            {/* Soups Menu */}
            <div>
                <PageHeading background={soupBG} heading={"Soups"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} width={'w-8/12'}></PageHeading>
                <br /><br />
                {
                    (menu && soups) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (soups) &&
                                soups.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                        </div> : spinner
                }
                <br /><br />
                <div className="text-center">
                    <Link to="/shop">
                        {orderButton}
                    </Link>
                </div>
            </div>
            <br /><br />
            {/* Desserts Menu */}
            <div>
                <PageHeading background={dessertBG} heading={"Desserts"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} width={'w-8/12'}></PageHeading>
                <br /><br />
                {
                    (menu && desserts) ?
                        <div className='grid w-11/12 gap-10 mx-auto md:grid-cols-2'>
                            {
                                (desserts) &&
                                desserts.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                            }
                        </div> : spinner
                }
                <br /><br />
                <div className="text-center">
                    <Link to="/shop/desserts">
                        {orderButton}
                    </Link>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default OurMenu;