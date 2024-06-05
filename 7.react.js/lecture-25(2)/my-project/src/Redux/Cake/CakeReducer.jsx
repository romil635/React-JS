import { BUY_CAKE } from "./CakeConstant";
import { ADD_CAKE } from "./CakeConstant";

const initialState = {
    numOfCake: 10
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAKE: return {
            ...state,
            numOfCake: state.numOfCake + 1
        }
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - 1
        }

        default: return state
    }
}
export default CakeReducer