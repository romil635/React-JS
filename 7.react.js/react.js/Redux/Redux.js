const redux = require('redux')
const createStore = redux.createStore

/* constant */

const BUY_ICECREAME = 'BUY_ICECREAME'
const BUY_MAGGIE = "BUY_MAGGIE"
const BUY_PIZZA = "BUY_PIZZA"

function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'First Redux Action'
    }
}
function buy_maggie(){
    return{     
        type: BUY_MAGGIE,
        info: 'Buying maggie'
    }
}

function buy_pizza(){
    return{
        type: BUY_PIZZA,
        info: 'Buying pizza'
    }
}
const initialState = {
    numOfIcecreame : 20,
    numOfmaggie : 20,
    numofpizza : 20
}

const reducer  = (state = initialState , action) => {
    switch(action.type){
        case BUY_ICECREAME: return {...state , numOfIcecreame: state.numOfIcecreame - 1}
        case BUY_MAGGIE: return {...state , numOfmaggie: state.numOfmaggie - 1}
        case BUY_PIZZA: return {...state , numofpizza: state.numofpizza - 1}

        default: return state
        
    }
}

const store = createStore(reducer)

console.log('Initial State' , store.getState());

store.subscribe(() => console.log('Updated State' , store.getState()))

store.dispatch(buy_icecreame())
store.dispatch(buy_icecreame())


store.dispatch(buy_maggie())

store.dispatch(buy_pizza())
