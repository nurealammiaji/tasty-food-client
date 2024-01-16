
import { Helmet } from 'react-helmet-async';

const MyCart = () => {
    return (
        <div className="w-screen">
            <Helmet>
                <title>Cart || Tasty Food</title>
            </Helmet>
            <div>
                <h3 className='text-center'>My Cart</h3>
            </div>
        </div>
    );
};

export default MyCart;