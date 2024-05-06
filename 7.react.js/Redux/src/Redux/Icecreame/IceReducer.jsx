import { BUY_ICECREAME } from "./IceConstant";

const initialState = {
    numOFicecreame: 10
}

const IceReducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_ICECREAME: return{
            
            ...state,numOFicecreame:state.numOFicecreame - 1,
        } 
            
        default: return state
    }
}

export default IceReducer