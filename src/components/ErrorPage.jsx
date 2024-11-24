import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="  w-full mx-auto mt-3 text-center">
            <h1 className="text-6xl text-purple-900  animate-bounce">Ooops</h1>
            <h1 className="my-4">Sorry! The page you're looking for doesn't exist.</h1>
           
            <Link className="border-2 p-2 bg-purple-900 text-white rounded-lg" to="/">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;





