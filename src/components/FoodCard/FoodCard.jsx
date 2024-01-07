

const FoodCard = ({ item }) => {

    const { name, image, recipe, price } = item;

    return (
        <div className="relative w-full shadow-xl bg-base-100">
            <p className="absolute px-5 py-2 font-semibold text-white right-5 top-5 bg-slate-800">$ {price}</p>
            <figure>
                <img src={image} alt="food picture" className="w-full" />
            </figure>
            <div className="items-center text-center bg-gray-100 card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe.slice(0, 50)}..</p>
                <div className="mt-3 card-actions">
                    <button className="p-3 text-yellow-600 uppercase border-b-2 border-yellow-600 rounded-lg hover:bg-slate-800 bg-slate-200">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;