import { useContext } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "LogOut SuccessFully",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {
            user ? <>
                <li><Link onClick={handleLogOut} className="btn btn-ghost btn-sm font-normal">Logout</Link></li>
            </> : <>
                <li><NavLink to='/login'>Login</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">TaskCrafter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0}>
                            <div className="avatar">
                                <div className="w-10 mr-4 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-center text-lg mb-1">{user?.email}</li>
                            <li>
                                {
                                    user ? <>
                                        <button onClick={handleLogOut} className="btn text-xl">
                                            Logout
                                            <CiLogin className="mt-1"></CiLogin>
                                        </button>
                                    </> : <>
                                        <NavLink to='/login' className="btn text-xl">
                                            Login
                                            <CiLogout className="mt-1"></CiLogout>
                                        </NavLink>
                                    </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;