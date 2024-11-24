

import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import Items from "./Items";




const AllProduct = () => {
    const data = useLoaderData()
     
    console.log(category)



    const [cards, setCards] = useState([data]);

     


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                cards.map(show => (<Items key={show.product_id}   cards={show}></Items>)
                )

            }



        </div>
    );
};

export default AllProduct;