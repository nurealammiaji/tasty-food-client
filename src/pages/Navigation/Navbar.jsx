import { PiHeart, PiListBold, PiShoppingCart, PiSignIn, PiSignOut } from "react-icons/pi";
import logo from "/tasty-food-logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './../../provider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout()
            .then(result => {
                console.log(result);
                localStorage.removeItem('toyCorner-user-token');
                localStorage.removeItem('toyCorner-pinnedPost');
                toast.success("Logout Successful !!", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="relative">
            <ToastContainer />
            <div className="fixed z-10 font-semibold text-white bg-black shadow px-auto navbar bg-opacity-30">
                <div className="navbar-start">
                    <details className="dropdown">
                        <summary tabIndex={0} className="btn btn-ghost lg:hidden">
                            <PiListBold className="text-lg" />
                        </summary>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/menu">Our Menu</Link></li>
                            <li><Link to="/shop">Our Shop</Link></li>
                            {
                                (user) &&
                                <>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/menu">Our Menu</Link></li>
                                    <li><Link to="/shop">Our Shop</Link></li>
                                </>
                            }
                        </ul>
                    </details>
                    <Link to="/">
                        <img className="md:h-[60px]" src={logo} alt="Tasty Food Logo" />
                    </Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal z-[1]">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/shop">Our Shop</Link></li>
                        {
                            (user) &&
                            <>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/menu">Our Menu</Link></li>
                                <li><Link to="/shop">Our Shop</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end [&>*]:ml-1 hover:[&>*]:text-red-600">
                    {/* <div className="mr-1 drawer-content tooltip" data-tip="Wishlist">
                        <label htmlFor="wishlist-drawer" className="relative drawer-button">
                            <PiHeart className="text-xl md:text-2xl" />
                            <span className="absolute left-0 p-1 top-2 badge badge-primary badge-sm">
                                {
                                    (user && wishlist) ? wishlist.length : '0'
                                }
                            </span>
                        </label>
                    </div>
                    <div className="mr-3 md:mr-5 drawer-content tooltip" data-tip="Cart">
                        <label htmlFor="cart-drawer" className="relative drawer-button">
                            <PiShoppingCart className="text-xl md:text-2xl" />
                            <span className="absolute left-0 p-1 top-2 badge badge-primary badge-sm">
                                {
                                    (user && cart) ? cart.length : '0'
                                }
                            </span>
                        </label>
                    </div> */}
                    {(user) ?
                        <>
                            <div className="mr-1 avatar tooltip" data-tip={`${user.displayName}`}>
                                <div className="w-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <Link to="/profile">
                                        <img src={user.photoURL} />
                                    </Link>
                                </div>
                            </div>
                            <button onClick={logoutHandler} className="tooltip" data-tip="Logout"><PiSignOut className="text-lg md:text-2xl" /></button>
                        </> :
                        <>
                            <button className="tooltip" data-tip="Login"><Link to="/login"><PiSignIn className="text-lg md:text-2xl" /></Link></button>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;