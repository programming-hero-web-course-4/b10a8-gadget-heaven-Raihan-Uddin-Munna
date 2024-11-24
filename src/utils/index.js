//get all coffees from local storage

import { toast } from "react-hot-toast"

const getAllFavoritesCard = () => {
    const all2 = localStorage.getItem('favoritesCard')

    if (all2) {
        const favorites = JSON.parse(all2)
        return favorites
    } else {
        return []
    }
}






//add a coffee to local storage

const addFavoriteCard = coffee => {
    const favoritesCard = getAllFavoritesCard()
    const isExist = favoritesCard.find(item => item.product_id == coffee.product_id)
    if (isExist) return toast.error('Alredy exist in the list!');
    favoritesCard.push(coffee)
    localStorage.setItem('favoritesCard', JSON.stringify(favoritesCard))
    toast.success('Successfully Added  in the list!');
}







//remove a coffee from local storage




export { addFavoriteCard ,getAllFavoritesCard}