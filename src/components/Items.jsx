
import { Link, useNavigate } from "react-router-dom";


const Items = ({ cards }) => {









    const navigate = useNavigate()
    const { product_title, price, product_image, product_id } = cards
    return (
        <>
            <div className="flex relative ">
                <Link
                    className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden w-full" >
                    <figure className='w-full h-48 overflow-hidden  '>
                        <img className=" w-full h-full object-contain " src={product_image} alt='' />
                    </figure>

                    <div className="p-6 font-medium">
                        <h1 className="text-xl transition hover:scale-105"> {product_title}</h1>
                        <p className="small">Price : ${price}</p>


                        <Link to={`/Allproduct/${product_id}`} className="btn mt-3 btn-warning ">Deatils</Link>

                    </div>
                </Link>
            </div>
        </>
    );
};

export default Items;