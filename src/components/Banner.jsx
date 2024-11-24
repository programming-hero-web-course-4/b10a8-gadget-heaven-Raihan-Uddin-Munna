import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-fit lg:h-[600px]">
            <div className="relative hero bg-purple-700 text-white min-h-[400px]">
            <div className="hero-content text-center">
                <div className="w-fit md:w-[650px] ">
                    <h1 className="text-2xl md:text-4xl font-bold">Upgrade Your Teach Accessorize with <br /> gadget Heaven Accessories</h1>
                    <p className="py-3 md:py-6">
                         Explore the latest gadgets that will take your experience to the next level.From smart devices to the coolest accessories,we have it all! 
                    </p>
                    <Link to='/Dashboard/card' className="btn btn-primary bg-white text-black mb-4">Shop Now</Link >
                </div>
            </div>


            
        </div>
        </div>
    );
};

export default Banner;