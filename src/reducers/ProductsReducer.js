import { FETCH_PRODUCTS } from "../constants/ActionTypes";

var initialState = [];

const productsReducer = (state= initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        default:
            return [...state]
    }
}

export default productsReducer;