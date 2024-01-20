import { Helmet } from "react-helmet-async";
import SectionHeading from '../../../components/SectionHeading/SectionHeading';


const ManageItems = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"Hurry Up"} heading={"Manage All Items"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div className="w-full lg:w-[600px] xl:w-[992px]">
                    <form className="p-10 bg-base-200">
                        <div className="w-full form-control">
                            <div className="label">
                                <span className="label-text">Recipe Name *</span>
                            </div>
                            <input type="text" placeholder="Type here" className="w-full input input-bordered" />
                        </div>
                        <div className="flex-row gap-5 mt-3 md:flex">
                            <div className="w-full md:w-6/12 form-control">
                                <div className="label">
                                    <span className="label-text">Category *</span>
                                </div>
                                <select className="w-full select select-bordered">
                                    <option>Salads</option>
                                    <option>Pizzas</option>
                                    <option>Soups</option>
                                    <option>Desserts</option>
                                    <option>Drinks</option>
                                </select>
                            </div>
                            <div className="w-full mt-3 md:mt-0 md:w-6/12 form-control">
                                <div className="label">
                                    <span className="label-text">Price *</span>
                                </div>
                                <input type="text" placeholder="Price" className="w-full input input-bordered" />
                            </div>
                        </div>
                        <div className="w-full mt-3 form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details *</span>
                            </div>
                            <textarea className="textarea textarea-bordered" placeholder="Recipe Details" rows={5}></textarea>
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn bg-[#D1A054]">Update Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;