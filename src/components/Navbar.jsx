import { NavLink, useLocation } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";


const Navbar = () => {

    const { pathname } = useLocation()
    console.log(pathname);

    return (
        <>
        
            <div className="navbar pl-1 md:pl-6 pr-6 md:pr-10 backdrop-blur-xl z-50 fixed ">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            <NavLink className={({ isActive }) => `  text-base     text-black   ${(isActive) ? ' pl-3 py-1 bg-purple-900 rounded-2xl text-white  ' : ' '}`} to="/">Home</NavLink>


                            <NavLink className={({ isActive }) => `  text-base     text-black   ${(isActive) ? ' pl-3 py-1 bg-purple-900 rounded-2xl text-white  ' : ' '}`} to="/Statistics">Statistics</NavLink>
                            <NavLink className={({ isActive }) => `  text-base     text-black   ${(isActive) ? ' pl-3 py-1 bg-purple-900 rounded-2xl text-white  ' : ' '}`} to="/Dashboard">Dashboard</NavLink>
                            <NavLink className={({ isActive }) => `  text-base     text-black   ${(isActive) ? ' pl-3 py-1 bg-purple-900 rounded-2xl text-white  ' : ' '}`} to="/Review">Review</NavLink>



                        </ul>
                    </div>


                    <NavLink className="text-lg md:text-2xl font-semibold">Gadget_Heaven</NavLink>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10 text-lg">



                        <NavLink className={({ isActive }) => `tab text-lg     text-black   ${(isActive) ? ' bg-purple-900 rounded-2xl text-white  ' : ' '}`} to="/">Home</NavLink>


                        <NavLink className={({ isActive }) => `tab  text-lg   text-black   ${(isActive) ? ' bg-purple-900 rounded-2xl text-white ' : ' '}`} to="/Statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) => `tab  text-lg    text-black   ${(isActive) ? ' bg-purple-900 rounded-2xl text-white ' : ' '}`} to="/Dashboard">Dashboard</NavLink>
                        <NavLink className={({ isActive }) => `tab  text-lg    text-black   ${(isActive) ? ' bg-purple-900 rounded-2xl text-white ' : ' '}`} to="/Review">Review</NavLink>


                    </ul>
                </div>





                <div className="navbar-end">
                    <NavLink to='/Dashboard/Card'> <button className="btn btn-ghost btn-circle">

                        <BiCartAdd size={35} />



                    </button>   </NavLink>
                    <NavLink to="/Dashboard/Wishlist">  <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <IoHeartOutline size={25} />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>  </NavLink>
                </div>
                
            </div>


        </>
    );
};

export default Navbar;