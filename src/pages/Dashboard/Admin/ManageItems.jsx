import { Helmet } from "react-helmet-async";
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import useMenu from '../../../hooks/useMenu';
import Item from "./Item";


const ManageItems = () => {

    const [menu] = useMenu();

    // const total = menu.reduce((sum, item) => item.price + sum, 0);
    // console.log(total);

    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Manage Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"Hurry Up"} heading={"Manage All Items"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div className="w-full lg:w-[600px] xl:w-[992px] bg-white p-5">
                    <div>
                        {
                            (menu) &&
                            <h3 className="text-2xl">Total Items: {menu.length}</h3>
                        }
                    </div>
                    <br />
                    <div className="overflow-x-auto">
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
                                    (menu) ?
                                        menu.map(item => <Item key={item._id} item={item}></Item>) :
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
                            {/* foot */}
                            <tfoot>
                                <tr className="bg-[#D1A054] text-white uppercase text-sm">
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;