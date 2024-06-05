import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "./Constant";



const getcartdatafromLocalstorage = () => {
    const cartData = localStorage.getItem("cart")
    return cartData ? JSON.parse(cartData) : [];
}


const Reducer = (state = getcartdatafromLocalstorage(),action) =>{
    switch(action.type){
        case ADD_TO_CART:
            // console.warn('add to cart called',action);
            const updataerdcartAdd = [action.data , ...state]
            localStorage.setItem("cart" ,JSON.stringify(updataerdcartAdd))
            return updataerdcartAdd

            const existingProduct = state.findIndex(item => item.id === action.data.id)
            let updateCartData;
            if(existingProduct >= 0){
                updateCartData = state.map(item=>item.id === action.data.id ? {...item , quantity:item.quantity +1} : item)
            }
            else{
                updateCartData = [{...action.data , quantity:1} , ...state]
            }

            case REMOVE_TO_CART:
                // console.warn('remove to cart called',action);
                const updataerdcartRemove = state.filter(item => item.id !== action.data)
                localStorage.setItem("cart" ,JSON.stringify(updataerdcartRemove))
                return updataerdcartRemove

                case EMPTY_CART:
                    // console.warn("empty cart",action);
                    localStorage.removeItem("cart")
                    return []
                    default:return state
            }
            
        }

        export default Reducer