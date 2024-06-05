import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "./Constant";



const getcartdatafromLocalstorage = () => {
    const cartData = localStorage.getItem("cart")
    return cartData ? JSON.parse(cartData) : [];
}


const Reducer = (state = getcartdatafromLocalstorage(),action) =>{
    switch(action.type){
        case ADD_TO_CART:
            console.warn('add to cart called',action);
            const updataerdcartAdd = [action.data , ...state]
            localStorage.setItem("cart" ,JSON.stringify(updataerdcartAdd))
            return updataerdcartAdd

            case REMOVE_TO_CART:
                console.warn('remove to cart called',action);
                const updataerdcartRemove = state.filter(item => item.id !== action.data)
                localStorage.setItem("cart" ,JSON.stringify(updataerdcartRemove))
                return updataerdcartRemove

                case EMPTY_CART:
                    console.warn("empty cart",action);
                    localStorage.removeItem("cart")
                    return []
                    default:return state
            }
            
        }

        export default Reducer