
import React, { useEffect, useState } from 'react';


import { getAllFavorites } from '../utils/indx';
import CardShowDeatils from './CardShowDeatils';

const CardShow = () => {
    const [card, setCard] = useState([])

    useEffect(() => {
        const favorites = getAllFavorites()
        setCard(favorites)
    }
        , [])



    // const [gadget, setGadget] = useState([card])
   
   

    //     const handleSort = (sortby) => {
    //         if (sortby == 'price') {
    //             const sorted = [...card].sort((a, b) => b.price - a.price)
    //             setGadget(sorted)
    //         }else{
    //             console.log(ooooppps)
    //         }
    //     }


        



    return (
        <>
            <div className='flex justify-between my-6 items-center'>
                <div className='font-semibold '>Card</div>


                <div className='flex gap-5'>
                    <h2>Total Price: </h2>
                    <button onClick={() => handleSort('price')} className='btn bg-purple-700 text-white'>Sort By Price</button>
                    <button className='btn bg-purple-700 text-white'>Purchase</button>
                </div>
            </div>





            

            <div className="grid grid-cols-1  w-3/4 mx-auto gap-4 ">
                {
                    card.map(show => (<CardShowDeatils key={show.product_id} cards={show}></CardShowDeatils>)
                    )

                }

            </div>


        </>
    );
};

export default CardShow;