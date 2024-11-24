



import { TiDelete } from "react-icons/ti";



const WishlistDeatilsShow = ({ cards }) => {









    const { product_title, price, product_image, product_id, description } = cards
    return (
        <>
         



            <div className="flex border-2 rounded-lg items-start justify-between">
                {/* 1 */}
                <div className="flex ">
                    <div className=" m-3 ">
                        <img className="border-2 rounded-lg w-[250px] h-[150px] p-4 object-contain " src={product_image} alt='' />
                    </div>
                    <div className="mt-5">
                        <h1 className="p-2 font-medium text-xl "> {product_title}</h1>
                        <p className="p-2 font-medium text-xs  ">{description}</p>
                        <p className="p-2 font-medium small">Price : ${price}</p>

                    </div>
                </div>

                {/* 2 */}
                <button className="text-red-500 mr-5 mt-5">
                    <TiDelete size={40} />
                </button>

            </div>

        </>
    );
};

export default WishlistDeatilsShow;