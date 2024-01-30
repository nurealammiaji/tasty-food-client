import { PiTrashBold } from "react-icons/pi";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";

const User = ({ user }) => {

    const { _id, name, email, image, role } = user;
    const [, refetch] = useUser();

    const handleAdminRole = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Want to make "${user.name}" as an admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                const userRole = {
                    role: "admin"
                };
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('tastyFood-user-token')}`,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userRole)
                })
                    .then(result => {
                        console.log(result);
                        refetch();
                        if (result) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${name} is now an admin.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        });
    }

    const handleUserRole = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Want to make "${user.name}" as an user`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                const userRole = {
                    role: "user"
                };
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('tastyFood-user-token')}`,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userRole)
                })
                    .then(result => {
                        console.log(result);
                        refetch();
                        if (result) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${name} is now an user.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        });
    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Want to delete "${user.name}" from the database`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(result => {
                        console.log(result);
                        refetch();
                        if (result) {
                            Swal.fire({
                                position: "center",
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
        });
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
                {
                    (user?.role === "user") ?
                        <button onClick={() => handleAdminRole(_id)} className="btn btn-sm bg-[#D1A054] text-white uppercase">{role}</button> :
                        <button onClick={() => handleUserRole(_id)} className="btn btn-sm bg-[#D1A054] text-white uppercase">{role}</button>
                }
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#B91C1C] text-white"><PiTrashBold className="text-lg" /></button>
            </td>
        </tr>
    );
};

export default User;