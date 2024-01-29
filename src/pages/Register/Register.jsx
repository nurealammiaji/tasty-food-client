import { Helmet } from "react-helmet-async";
import loginImage from "../../assets/others/authentication2.png";
import { useContext, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import bg from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiFacebookLogoBold, PiFacebookLogoFill, PiGithubLogoBold, PiGithubLogoFill, PiGoogleLogo, PiGoogleLogoBold, PiGoogleLogoFill } from "react-icons/pi";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { emailRegister, googleLogin, loading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const destination = location.state?.from?.pathname || "/";

    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name: name,
            email: email,
            image: image,
            role: "user"
        };
        emailRegister(email, password)
            .then(result => {
                console.log(result);
                // Update Profile
                const currentUser = result.user;
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: image
                })
                .then(result => {
                    console.log(result);
                    // User Creation
                    fetch('http://localhost:5000/users', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => {
                        console.log(error);
                    })
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registered Successfully !",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(destination, { replace: true });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${error.message.slice(9,)}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const googleRegisterHandler = () => {
        googleLogin()
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registered Successfully !",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(destination, { replace: true });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${error.message.slice(9,)}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <Helmet>
                <title>Register || Tasty Food</title>
            </Helmet>
            <div>
                <div style={{ background: `url(${bg})` }} className="w-screen min-h-screen border hero">
                    <div className="w-10/12 p-10 mx-auto my-auto shadow-2xl hero-content">
                        <div className="grid gap-10 md:grid-cols-2">
                            <div className="mx-auto md:w-10/12">
                                <form onSubmit={registerHandler}>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-semibold">Register</h3>
                                    </div>
                                    <br />
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input
                                            type="url"
                                            placeholder="photo url"
                                            name="image"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="password"
                                            name="password"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="mt-6 form-control">
                                        <button className="btn text-white bg-[#D1A054]" type="submit">Register</button>
                                    </div>
                                    <div className="flex items-center justify-center mt-3">
                                        <label className="label"><span className="mr-2 text-sm">Already registered ?</span>
                                            <Link to="/login" className="text-sm font-medium text-[#D1A054] label-text-alt link link-hover">
                                                Go to log in
                                            </Link>
                                        </label>
                                    </div>
                                    <div className="flex justify-center">
                                        <label className="label">
                                            <span className="font-medium label-text">Or sign up with</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center mt-3">
                                        <button onClick={googleRegisterHandler} className="btn btn-outline btn-circle btn-success btn-sm"><PiGoogleLogoBold className="text-2xl" /></button>
                                        <button className="mx-5 btn-sm btn btn-outline btn-circle"><PiGithubLogoBold className="text-2xl" /></button>
                                        <button className="btn btn-outline btn-circle btn-primary btn-sm"><PiFacebookLogoBold className="text-2xl" /></button>
                                    </div>
                                </form>
                            </div>
                            <div className="mx-auto my-auto">
                                <figure>
                                    <img src={loginImage} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;