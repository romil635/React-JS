import { BUY_ICE } from "./IceConstant";
import { Add_ICE } from "./IceConstant";


export function buy_ice(){
    return{
        type:BUY_ICE
    }
}

export function add_ice(){
    return{
        type:Add_ICE
    }
}