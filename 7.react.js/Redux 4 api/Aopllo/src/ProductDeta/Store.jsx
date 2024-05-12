import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './RootReducer'
// import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import ProductSaga from '../ProductSaga'


const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer : RootReducer,
    middlewarev : () => [sagaMiddleware]
})

middleware.run(ProductSaga)

export default store;