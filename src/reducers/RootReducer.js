import { combineReducers } from 'redux';
import productsReducer from './ProductsReducer';

const RootReducer = combineReducers({
    products : productsReducer
});

export default RootReducer;