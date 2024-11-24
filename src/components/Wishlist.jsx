

import React, { useEffect, useState } from 'react';
import Items from './Items';
 
 
import { getAllFavoritesCard } from '../utils';
import WishlistDeatilsShow from './WishlistDeatilsShow';
 

const Wishlist = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const favorites = getAllFavoritesCard()
        setCards(favorites)
    }
        , [])

    return (
        <div>
           <div className='font-semibold my-6 '>Whislist</div>

            <div className="grid grid-cols-1  w-3/4 mx-auto gap-4 ">
                {
                    cards.map(show => (<WishlistDeatilsShow key={show.product_id} cards={show}></WishlistDeatilsShow>)
                    )

                }

            </div>


        </div>
    );
};

export default Wishlist;