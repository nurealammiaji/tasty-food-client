import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const FoodCard = ({ item }) => {

    const { user } = useContext(AuthContext);
    const { _id, name, image, category, recipe, price } = item;
    const [, refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        console.log(item);
        if (user) {
            const cart = {
                menuID: _id,
                name: name,
                recipe: recipe,
                image: image,
                category: category,
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
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Item has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(data);
                    refetch();
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            navigate("/login", { state: { from: location }, replace: true })
        }
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