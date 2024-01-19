import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { PiForkKnifeBold } from 'react-icons/pi';


const AddItems = () => {
    return (
        <div>
            <Helmet>
                <title>Add Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <SectionHeading subHeading={"What's New ?"} heading={"Add An Item"} width={'w-8/12 md:w-6/12'}></SectionHeading>
                <br /><br />
                <div>
                    <form className="p-5 bg-base-200">
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Name *</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="flex-row md:flex gap-5 mt-3">
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Category *</span>
                                </div>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option>Salads</option>
                                    <option>Pizzas</option>
                                    <option>Soups</option>
                                    <option>Desserts</option>
                                    <option>Drinks</option>
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Price *</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="form-control w-full mt-3">
                            <div className="label">
                                <span className="label-text">Recipe Details *</span>
                            </div>
                            <textarea className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                        </div>
                        <div className="form-control w-full mt-3">
                            <div className="label">
                                <span className="label-text">Recipe Image *</span>
                            </div>
                            <input type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full"/>
                        </div>
                        <br />
                        <button type="submit" className="btn bg-[#D1A054]">Add Item <PiForkKnifeBold/></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;