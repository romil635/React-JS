import ChocoReducer from "./Choco/ChocoReducer";
import CakeReducer from'./Cake/CakeReducer'
import { combineReducers } from "redux";





const RootReducer = combineReducers({
    cake:CakeReducer,
    choco:ChocoReducer
})

export default RootReducer
  