import RootReducer from './RootReducre';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from'redux-saga'
import productSaga from './ProductRedux/ProductSaga';


const sagaMiddelware = createSagaMiddleware()

  const store = configureStore({
    reducer:RootReducer,
    middleware:() =>[sagaMiddelware]
  }) 
  sagaMiddelware.run(productSaga)

  export default store