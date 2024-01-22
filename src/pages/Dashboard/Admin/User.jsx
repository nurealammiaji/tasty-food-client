import { PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const User = ({ user }) => {

    const { _id, name, email, image } = user;

    const handleDelete = (_id) => {
        console.log("Delete: ", _id);
    }

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
                    <div className="text-sm opacity-50">{email}</div>
                </div>
            </td>
            <td>
                $ price
            </td>
            <td>
                <Link to={`/dashboard/manage-items/${_id}`}><button className="btn btn-sm bg-[#D1A054] text-white"><PiNotePencilBold className="text-lg" /></button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#D1A054] text-white"><PiTrashBold className="text-lg" /></button>
            </td>
        </tr>
    );
};

export default User;