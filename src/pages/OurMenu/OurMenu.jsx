
import PageHeading from './../../components/PageHeading/PageHeading';
import menuBG from '../../assets/menu/banner3.jpg';

const OurMenu = () => {
    return (
        <div>
            <PageHeading background={menuBG} heading={"Our Menu"} subHeading={"Would you like to try a dish?"}></PageHeading>
            <br /><br />
        </div>
    );
};

export default OurMenu;