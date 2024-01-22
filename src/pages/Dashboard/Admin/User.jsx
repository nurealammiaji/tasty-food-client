import { PiNotePencilBold, PiTrashBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";

const User = ({ user }) => {

    const { _id, name, email, image } = user;
    const [, refetch] = useUser();

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(result => {
                console.log(result);
                refetch();
                if (result) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User has been deleted !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
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
                </div>
            </td>
            <td>
                <div>{email}</div>
            </td>
            <td>
                <Link to={`/dashboard/manage-items/${_id}`}><button className="btn btn-sm bg-[#D1A054] text-white"><PiNotePencilBold className="text-lg" /></button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#B91C1C] text-white"><PiTrashBold className="text-lg" /></button>
            </td>
        </tr>
    );
};

export default User;