import { BUY_CAKE } from "./CakeConstant"
import { ADD_CAKE } from "./CakeConstant"

export function buy_cake(){
    return{
        type:BUY_CAKE,
    }
}

export function add_cake(){
    return{
        type:ADD_CAKE
    }
}