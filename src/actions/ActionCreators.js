import { FETCH_PRODUCTS } from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const fetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res=> {
            dispatch(fetchProducts(res.data))
        })
    }
}
export const fetchProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
}