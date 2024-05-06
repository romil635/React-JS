import { BUY_CACK } from "./CakeConstan";

const initialState = {
    NUMOFCACK: 10
}

const CackReducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_CACK: return{
            
            ...state,NUMOFCACK:state.NUMOFCACK - 1,
        } 
            
        default: return state
    }
}

export default CackReducer