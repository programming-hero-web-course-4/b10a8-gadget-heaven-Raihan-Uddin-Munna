import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { addFavorite } from "../utils/indx";
import { addFavoriteCard, getAllFavoritesCard } from "../utils";

import { IoHeartOutline } from "react-icons/io5";
const AllElement = () => {


    const data = useLoaderData()
    const { product_id } = useParams()


    const [deatils, setDeatils] = useState({});

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const newData = data.find(deatils => deatils.product_id == product_id);
        console.log(data, newData, product_id, deatils)
        setDeatils(newData)

        const favorites = getAllFavoritesCard()
        const isExist = favorites.find(item => item.product_id == newData.product_id)
        if (isExist) {
            setIsFavorite(true)
        }


    }, [data, product_id])




    const product = {

        "Specification": [
            "Intel Core i7 Processor",
            "16GB RAM",
            "512GB SSD",
            "Intel Iris Xe Graphics"
        ],

    };



    //Handle Favorite btn click
    const handleFavorite = (deatils) => {
        addFavorite(deatils)
    }


    //Handle Favorite btn click for favorite
    const handleFavoriteCard = (deatils) => {
        addFavoriteCard(deatils)
        setIsFavorite(true)
    }














    const { product_title, product_image, price, description, Specification, rating } = deatils;

    return (
        <>
            <div className="text-center bg-purple-700  pb-16 text-white">
                <h1 className="text-2xl py-2">Product Deatils</h1>
                <p>{description}</p>
            </div>

            <div className=" w-fit mx-auto flex gap-4 p-8 border-2 shadow-2xl rounded-lg  ">


                <div>
                    <img className="py-10 px-6 border-2 rounded-lg " src={product_image} alt="" />
                </div>
                <div>
                    <h1 className=" pb-3 text-2xl font-semibold">{product_title}</h1>
                    <p className=" pb-3 font-semibold"> Price: ${price}</p>
                    <h1 className=" pb-3 border-1 rounded-xl bg-green-300 text-green w-fit px-2">In stock</h1>
                    <p>{description}</p>



                    <ul>
                        <p><span className=" py-3 font-semibold">Specification</span>:  </p>
                        {product.Specification.map((spec, index) => (
                            <li key={index}>{index + 1}. {spec}</li>
                        ))}
                    </ul>



                    <p><span className=" py-3 font-semibold">Rating:</span> {rating}</p>

                    <div className="flex gap-2">
                        <button

                            onClick={() => handleFavorite(deatils)} className="rounded-3xl text-white    my-2 btn bg-purple-700"> Add To Cart</button>
                        <button
                            disabled={isFavorite}
                            onClick={() => handleFavoriteCard(deatils)} className="rounded-3xl text-white    my-2 btn bg-purple-700">  <IoHeartOutline size={25} /></button>



                    </div>
                </div>

            </div>






        </>
    );
};

export default AllElement;
