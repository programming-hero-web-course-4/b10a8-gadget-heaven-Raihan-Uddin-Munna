import { Outlet } from "react-router-dom";
import Dashboardbanner from "../components/Dashboardbanner";
 


const Dashboard = () => {
    return (
        <>
            {/* banner with btn */}
            <Dashboardbanner></Dashboardbanner>
            {/* Dynamic section */}
            <Outlet></Outlet>

        

        </>
    );
};

export default Dashboard;