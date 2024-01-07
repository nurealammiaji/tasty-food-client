import PageHeading from "../../components/PageHeading/PageHeading";
import shopBG from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import { useEffect, useState } from "react";
import ShopCards from "../../components/ShopCards/ShopCards";


const OurShop = () => {

    const [tabIndex, setTabIndex] = useState(0);

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

    return (
        <div>
            <Helmet>
                <title>Shop || Tasty Food</title>
            </Helmet>
            <PageHeading background={shopBG} heading={"Our Shop"} subHeading={"Would you like to try a new dish ?"} width={"md:py-20 md:px-40"}></PageHeading>
            <br /><br />
            <div className="w-11/12 mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-xl text-center">
                        <Tab>Salads</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            (menu && salads) &&
                            <ShopCards items={salads}></ShopCards>
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 6</h2>
                    </TabPanel>
                </Tabs>
            </div>
            <br /><br />
        </div>
    );
};

export default OurShop;