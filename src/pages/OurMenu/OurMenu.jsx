
import PageHeading from './../../components/PageHeading/PageHeading';
import menuBG from '../../assets/menu/banner3.jpg';
import { Helmet } from 'react-helmet-async';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu || Tasty Food</title>
            </Helmet>
            <PageHeading background={menuBG} heading={"Our Menu"} subHeading={"Would you like to try a dish?"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default OurMenu;