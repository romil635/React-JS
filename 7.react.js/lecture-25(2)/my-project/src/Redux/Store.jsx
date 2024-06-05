import{createStore} from'redux';
import CakeReducer from'./Cake/CakeReducer';
// import iceReducer from './Icecream/IceReducer';

const store = createStore(CakeReducer)
// const store = createStore(iceReducer)

export default store