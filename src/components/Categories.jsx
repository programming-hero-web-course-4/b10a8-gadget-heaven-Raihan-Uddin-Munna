import { NavLink } from "react-router-dom";


const Categories = ({ categoriesShow }) => {

    console.log(categoriesShow);
    return (
        <div role="tablist" className="bg-gray-200  flex flex-col border-2 p-6 rounded-lg  gap-2 tabs-bordered justify-start h-min">


            {
                (categoriesShow.map((category1) => (<NavLink key={category1.category} to={`/product/${category1.category}`} role="tab" className={({ isActive }) => `tab px-6   border-2 rounded-lg  text-black   ${(isActive) ? 'tab-active, bg-purple-700 text-white  ' : 'bg-slate-400'}`}>{category1.category} </NavLink>))
                 
                )
           }
            
        </div>
        

    );
     
};

export default Categories;

