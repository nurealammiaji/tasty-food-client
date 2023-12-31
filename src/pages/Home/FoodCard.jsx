

const FoodCard = ({ food }) => {

    const { name, image, recipe } = food;

    return (
        <div className="w-full shadow-xl bg-base-100">
            <figure>
                <img src={image} alt="food picture" className="w-full" />
            </figure>
            <div className="items-center text-center bg-gray-100 card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe.slice(0, 50)}</p>
                <div className="card-actions">
                    <button className="p-3 uppercase border-b-2 border-yellow-600 rounded-lg hover:text-yellow-600 hover:bg-slate-800">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;