import { Helmet } from 'react-helmet-async';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import useCart from '../../../hooks/useCart';
import Cart from './Cart';

const MyCart = () => {

    const [cart] = useCart();

    return (
        <div>
            <Helmet>
                <title>My Cart || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <div className="p-10">
                    <SectionHeading subHeading={"Hurry Up"} heading={"Manage All Items"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                    <br /><br />
                    <div className="w-full lg:w-[600px] xl:w-[992px] bg-white p-5">
                        <div>
                            {
                                (cart) &&
                                <h3 className="text-2xl">Total Items: {cart.length}</h3>
                            }
                        </div>
                        <br />
                        <div className="overflow-x-auto rounded-t-lg">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="bg-[#D1A054] text-white uppercase text-sm">
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        (cart) ?
                                            cart.map(item => <Cart key={item._id} item={item}></Cart>) :
                                            <>
                                                <tr className="w-screen mx-auto my-auto text-center">
                                                    <td className="flex items-center justify-center gap-3 my-5 font-semibold text-red-600">
                                                        <span className="loading loading-spinner"></span>
                                                        Loading ...
                                                    </td>
                                                </tr>
                                            </>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;