
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";
    return (
        <div>
              <Toaster />
            <div className='lg:px-5 lg:mx-auto'>
                {/* Navbar */}
                <div className='h-16' style={{ backgroundColor: isHomePage ? "purple" : "" }}>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='min-h-[calc(100vh-290px)] pb-10 mx-auto container px-3 md:px-8 rounded-lg'>
                {/*Dynamic section  */}
                <Outlet></Outlet>
            </div>
            {/*Footer  */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;