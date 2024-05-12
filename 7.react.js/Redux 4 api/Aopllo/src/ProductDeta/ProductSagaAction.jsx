import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_ADD } from "./ProductConstant";
function* getProduct(){
    let ProductList = yield fetch('http://localhost:3000/Product')
    data = yield ProductList.json()
    console.warn(data);
    console.warn('ProductDataAction Called' , data);
    yield put({type:PRODUCT_ADD, data:data})
    
}