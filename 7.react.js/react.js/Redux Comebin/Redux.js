const redux = require('redux')
const createStore = redux.createStore

/* combine Reducer */
const combineReducers = redux.combineReducers

/* reduxLogger */

const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()



const BUY_ICECREAME = 'BUY_ICECREAME'
const BUY_CACK = 'CACK'
const BUY_COOKIE = 'COOKIE'




function buy_icecreame(){
    return{
        type:BUY_ICECREAME,
        info:'First Redux Action'
    }
}
function cack(){
    return{
        type:BUY_CACK,
        info:'Second Redux Action'
    }
}
function Coockie(){
    return{
        type:BUY_COOKIE,
        info:'Third Redux Action'
    }
}

const initialState = {
    numOfIcecreame : 10,
}
const initialStatecack = {
    numberofcack : 20,
}
const initialStatecoockie = {
    numberofcookie : 30,
}

const reducerIce  = (state = initialState , action) => {
    switch(action.type){
        case BUY_ICECREAME: 
            return {...state , numOfIcecreame:state.numOfIcecreame - 1}
        default: return state
    }
}

const reducerCack = (state = initialStatecack , action) => {
    switch(action.type){
        case BUY_CACK: 
            return {...state , numberofcack:state.numberofcack - 1}
        default: return state
}
}

const reducerCookie = (state = initialStatecoockie , action) => {
    switch(action.type){
        case BUY_COOKIE: 
            return {...state , numberofcookie:state.numberofcookie - 1}
        default: return state
}
}

const rootReducer = redux.combineReducers({
    ice:reducerCack,
    cack:reducerIce,
    Coockie:reducerCookie
})


const store = createStore(rootReducer , applyMiddleware(logger))
console.log('Initial State' , store.getState());
store.subscribe(() => console.log('Updated State' , store.getState()))

store.dispatch(buy_icecreame())
store.dispatch(cack())
store.dispatch(Coockie())
