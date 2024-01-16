import { useContext } from "react";
import { json } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const FoodCard = ({ item }) => {

    const {user} = useContext(AuthContext);

    const { _id, name, image, recipe, price } = item;

    const handleAddToCart = (item) => {
        console.log(item);
        const cart = {
            menuID: _id,
            name: name,
            image: image,
            price: price,
            email: user?.email
        }
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="relative w-full bg-gray-100 shadow-xl">
            <p className="absolute px-5 py-2 font-semibold text-white right-5 top-5 bg-slate-800">$ {price}</p>
            <figure>
                <img src={image} alt="food picture" className="w-full" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe.slice(0, 50)}..</p>
                <div className="mt-5 card-actions">
                    <button onClick={() => handleAddToCart(item)} className="p-3 font-medium text-yellow-600 uppercase border-b-2 border-yellow-600 rounded-lg hover:bg-slate-800 bg-slate-200">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;