// react Redux  = Javascript -> Actiohn -> Reducer -> Sate

const redux = require('redux')
const createStore = redux.createStore

/* Combaineducer*/
const combineReducers = redux.combineReducers

const applyMiddlware = redux.applyMiddleware 
const reduxLogger = require('redux-logger')
const logger  = reduxLogger.createLogger()  



const BUY_ICECREAME = 'BUY_ICECREAME'
const BUY_CHOCOLATE =  'BUY_CHOCOLATE'
const BUY_CHIPS = 'BUY_CHIPS'


function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'Frist Redux Action'
    }
}
function buy_chocolate(){
    return{
        type:BUY_CHOCOLATE,
        info:'second Redux Action'
    }
}
function chips(){
    return{
        type:BUY_CHIPS,
        info:'three Redux Action'
    }
}

const initialStateIcreame ={
    numOfIcecreame :20,
}
const  initialStatechocollate={
    numOfChocolate :10,
}

const initialStatechips={
    numOfchips:5

}

const reducericecreame = (state = initialStateIcreame , action) =>{
    switch(action.type){
        case BUY_ICECREAME:return {...state, numOfIcecreame:state.numOfIcecreame-1}
        default:return state
    }
}

const reducerChocolate = (state = initialStatechocollate , action) =>{
    switch(action.type){
        case BUY_CHOCOLATE:return{...state, numOfChocolate:state.numOfChocolate-1}   
        default:return state
    }
}

const reducerchpis = (state = initialStatechips , action) =>{
    switch(action.type){ 
        case BUY_CHIPS:return{...state ,numOfchips:state.numOfchips-1} 
        default:return state
    }
}

const rootReducer  = redux.combineReducers({
    icecreame:reducericecreame,
    chocolate:reducerChocolate,
    chips:reducerchpis
})
const store = createStore(rootReducer,applyMiddlware(logger))
console.log('Initial State' , store.getState());
store.subscribe(()=>console.log('updated State' , store.getState()))
store.dispatch(buy_icecreame())
store.dispatch(buy_icecreame())
store.dispatch(buy_chocolate())
store.dispatch(chips())