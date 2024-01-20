import { PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    const { _id, name, recipe, image, category, price } = item;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{category}</div>
                </div>
            </td>
            <td>
                $ {price}
            </td>
            <td>
                <Link to={`/dashboard/manage-items/${_id}`}><button className="btn btn-sm bg-[#D1A054] text-white"><PiNotePencilBold className="text-lg" /></button></Link>
            </td>
            <td>
                <button className="btn btn-sm bg-[#D1A054] text-white"><PiTrashBold className="text-lg"/></button>
            </td>
        </tr>
    );
};

export default Item;