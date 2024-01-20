import { Helmet } from "react-helmet-async";
import SectionHeading from '../../../components/SectionHeading/SectionHeading';


const ManageItems = () => {
    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Manage Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"Hurry Up"} heading={"Manage All Items"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div className="w-full lg:w-[600px] xl:w-[992px] bg-white">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 h-12 mask mask-squircle">
                                                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">Brice Swyre</div>
                                            <div className="text-sm opacity-50">China</div>
                                        </div>
                                    </td>
                                    <td>
                                        Carroll Group
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                    </td>
                                    <td>Red</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
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