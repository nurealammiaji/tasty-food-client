import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {

    const cart = useLoaderData();
    const { _id, name, recipe, image, category, price } = cart;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const recipe = form.recipe.value;
        const cart = {
            name: name,
            category: category,
            price: price,
            recipe: recipe
        }
        console.log(cart);
    }

    return (
        <div>
            <Helmet>
                <title>Update Items || Tasty Food</title>
            </Helmet>
            <div className="p-10">
                <h3 className="text-3xl font-medium text-center uppercase">Update Item</h3>
                <br /><br />
                <div className="w-full lg:w-[600px] xl:w-[992px]">
                    <form onSubmit={handleUpdate} className="p-10 bg-base-200">
                        <div className="w-full form-control">
                            <div className="label">
                                <span className="label-text">Recipe Name *</span>
                            </div>
                            <input type="text" name="name" defaultValue={name} placeholder="Type here" className="w-full input input-bordered" />
                        </div>
                        <div className="flex-row gap-5 mt-3 md:flex">
                            <div className="w-full md:w-6/12 form-control">
                                <div className="label">
                                    <span className="label-text">Category *</span>
                                </div>
                                <select name="category" className="w-full select select-bordered">
                                    <option value={category}>{category}</option>
                                    <option value={'salad'}>Salad</option>
                                    <option value={'pizza'}>Pizza</option>
                                    <option value={'soup'}>Soup</option>
                                    <option value={'desert'}>Dessert</option>
                                    <option value={'drinks'}>Drink</option>
                                    <option value={'offered'}>Offered</option>
                                    <option value={'popular'}>Popular</option>
                                </select>
                            </div>
                            <div className="w-full mt-3 md:mt-0 md:w-6/12 form-control">
                                <div className="label">
                                    <span className="label-text">Price *</span>
                                </div>
                                <input type="text" name="price" placeholder="Price" className="w-full input input-bordered" defaultValue={price} />
                            </div>
                        </div>
                        <div className="w-full mt-3 form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details *</span>
                            </div>
                            <textarea className="textarea textarea-bordered" placeholder="Recipe Details" name="recipe" rows={6} defaultValue={recipe}></textarea>
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

export default UpdateItem;