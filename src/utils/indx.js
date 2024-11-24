//get all coffees from local storage

import { toast } from "react-hot-toast"

const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')

    if (all) {
        const favorites = JSON.parse(all)
        return favorites
    } else {
        return []
    }
}






//add a coffee to local storage

const addFavorite = coffee => {
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.product_id == coffee.product_id)
    if (isExist) return toast.error('Alredy exist!');
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully Added!');
}







//remove a coffee from local storage




export { addFavorite,getAllFavorites }