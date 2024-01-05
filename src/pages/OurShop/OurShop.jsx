import PageHeading from "../../components/PageHeading/PageHeading";
import shopBG from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Shop || Tasty Food</title>
            </Helmet>
            <PageHeading background={shopBG} heading={"Our Shop"} subHeading={"Would you like to try a new dish ?"} width={"md:py-20 md:px-40"}></PageHeading>
            <br /><br />
            <div className="w-11/12 mx-auto">
                <Tabs>
                    <TabList className="text-center">
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                        <Tab>Title 4</Tab>
                        <Tab>Title 5</Tab>
                        <Tab>Title 6</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
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