import { NavLink } from "react-router-dom";

const Dashboardbanner = () => {
    return (
        <>
            <div className="bg-purple-700 text-white py-10 ">
                <h1 className="text-xl md:text-2xl text-center lg:text-3xl font-semibold mb-2 md:mb-3">Dashboard</h1>
                <p className="text-xs   text-center   font-semibold mb-2 md:mb-3">
                    Explore the latest gadgets that will take your experience to the next level.From smart devices to the coolest accessories,we have it all!
                </p>
                <div className="w-2/12 flex gap-3  mx-auto">
                    <NavLink to="/Dashboard/Card" className={({ isActive }) => `btn font-semibold  bg-purple-900  ${(isActive) ? ' bg-white rounded-2xl text-black ' : 'text-white '}`}>Card</NavLink>
                    <NavLink to="/Dashboard/Wishlist" className={({ isActive }) => `btn font-semibold  bg-purple-900  ${(isActive) ? ' bg-white rounded-2xl text-black ' : 'text-white '}`}>Wishlist</NavLink>
                </div>
            </div>
        </>
    );
};

export default Dashboardbanner;

// className="btn bg-purple-700 "