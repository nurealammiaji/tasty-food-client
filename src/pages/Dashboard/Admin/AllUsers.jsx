import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import User from "./User";
import useUser from "../../../hooks/useUser";


const AllUsers = () => {

    const [users] = useUser();

    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Manage Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"How many ??"} heading={"Manage All Users"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div className="w-full lg:w-[600px] xl:w-[992px] bg-white p-5">
                    <div>
                        {
                            (users) &&
                            <h3 className="text-2xl">Total Users: {users.length}</h3>
                        }
                    </div>
                    <br />
                    <div className="overflow-x-auto rounded-t-lg">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white uppercase text-sm">
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    (users) ?
                                        users.map(user => <User key={user._id} user={user}></User>) :
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
    );
};

export default AllUsers;