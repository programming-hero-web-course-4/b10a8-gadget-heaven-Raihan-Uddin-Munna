import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import Banner2 from "../components/Banner2";
import Navbar from "../components/Navbar";



const Home = () => {
    const { pathname } = useLocation()
    console.log(pathname);

    const infro = useLoaderData()
    return (
        <div>
            {/*Banner-1 */}
            <div>
                <div> <Banner></Banner></div>

            </div>
            {/*Banner-2 */}
            <div><Banner2></Banner2></div>
            {/*Heading*/}

            <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
            <hr />

            {/*dynamic */}
            <div className=" flex flex-col md:flex-row gap-5 border-3 mx-auto  ">

                <Categories categoriesShow={infro}></Categories>
                {/*dynamic cards */}
                <Outlet></Outlet>
            </div>
             
             
        </div>
    );
};

export default Home;