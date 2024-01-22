import PageHeading from "../../components/PageHeading/PageHeading";
import shopBG from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import { useEffect, useState } from "react";
import ShopCards from "../../components/ShopCards/ShopCards";
import { useParams } from "react-router-dom";


const OurShop = () => {

    const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
    let { category } = useParams();
    if (category === undefined) {
        category = "salads";
    }
    const initialIndex = categories.indexOf(category) ;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const [menu] = useMenu();

    const [salads, setSalads] = useState();
    const [pizzas, setPizzas] = useState();
    const [soups, setSoups] = useState();
    const [desserts, setDesserts] = useState();
    const [drinks, setDrinks] = useState();


    useEffect(() => {
        if (menu) {
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

    return (
        <div>
            <Helmet>
                <title>Shop || Tasty Food</title>
            </Helmet>
            <PageHeading background={shopBG} heading={"Our Shop"} subHeading={"Would you like to try a new dish ?"} width={"md:py-20 md:px-40"}></PageHeading>
            <br /><br />
            <div className="w-11/12 mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-xl text-center focus:[&>*]:text-[#D1A054] focus:[&>*]:underline-offset-8 focus:[&>*]:underline font-semibold">
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <br /><br />
                    <TabPanel>
                        {
                            (menu && salads) ?
                                <ShopCards items={salads}></ShopCards> :
                                spinner
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            (menu && pizzas) ?
                                <ShopCards items={pizzas}></ShopCards> :
                                spinner
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            (menu && soups) ?
                                <ShopCards items={soups}></ShopCards> :
                                spinner
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            (menu && desserts) ?
                                <ShopCards items={desserts}></ShopCards> :
                                spinner
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            (menu && drinks) ?
                                <ShopCards items={drinks}></ShopCards> :
                                spinner
                        }
                    </TabPanel>
                </Tabs>
            </div>
            <br /><br />
        </div>
    );
};

export default OurShop;