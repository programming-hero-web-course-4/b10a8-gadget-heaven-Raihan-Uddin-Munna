
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Items from "./Items";



const Laptop = () => {
    const data = useLoaderData()
    const { category } = useParams()
     
   




    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (category === "All Product") {
            const filterByMatch = [...data]
            setCards(filterByMatch)
        } else if (category) {
            const filterByMatch = [...data].filter(match => String(match.category) === String(category))
            setCards(filterByMatch)
        }
        else {
            setCards(data.slice(0, 6))
        }
    }, [data, category])


    return (
        < >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cards.map(show => (<Items key={show.product_id} cards={show}></Items>)
                    )

                }
                
            </div>

        </>
    );
};

export default Laptop;