import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const AllElement = () => {
    const data = useLoaderData(); // Data fetched from the loader
    const { product_id } = useParams();   // product_id from URL params
     
    

    const [details, setDetails] = useState(null);  // Set initial state to null for loading
    const [loading, setLoading] = useState(true);  // Loading state to show loading message

    useEffect(() => {
        if (data && product_id) {
            // Log data and product_id to debug
             
            const foundData = data.find(detail => String(detail.product_id) === String(product_id));
            setDetails(foundData);
            setLoading(false); // Set loading to false once data is fetched
        }
    }, [data, product_id]);

    // If data is still loading, show loading message
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!details) {
        // Handle case when no matching details are found
        return <p>No product found with the given ID.</p>;
    }

    const { product_title, price, description, Specification, rating } = details;

    return (
        <>
            <h1>The product_id is: {product_id}</h1>
            <h1 className="text-red-500">{product_title}</h1>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Specification: {Specification}</p>
            <p>Rating: {rating}</p>
            <button className="btn btn-warning">Add to cart</button>
        </>
    );
};

export default AllElement;
