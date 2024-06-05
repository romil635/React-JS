const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_ICECREAME = 'BUY_ICECREAME'
const BUY_CHOKOLATE = 'buy chocolate'
const BUY_CHIPS ='buy chips'

function buy_icecreame() {
    return {
        type: BUY_ICECREAME,
        info: 'First Redux Action'
    }
}

function Buy_chocolate() {
    return {
        type: BUY_CHOKOLATE,
        info: 'First Redux Action'
    }
}

function buy_chips() {
    return {
        type:BUY_CHIPS,
        info: 'First Redux Action'
    }
}

const initialState = {
    numOfIcecreame: 20,
    numofchocolate: 10,
    numofchips :15
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAME: return { ...state, numOfIcecreame: state.numOfIcecreame -1 }
        case BUY_CHOKOLATE: return { ...state, numofchokolate: state.numofchocolate -1 }
        case BUY_CHIPS: return { ...state, numofchips: state.numofchips -1 }
        default: return state
    }

}

const store = createStore(reducer)

console.log('Initial State', store.getState());

store.subscribe(() => console.log('Updated State', store.getState()))


store.dispatch(buy_icecreame())

store.dispatch(Buy_chocolate())

store.dispatch(buy_chips())