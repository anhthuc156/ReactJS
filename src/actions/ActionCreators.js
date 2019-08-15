import { FETCH_PRODUCTS } from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export default {
    fetchProducts : (products) => (
        {
            type: FETCH_PRODUCTS,
            products
        }
    ),
    fetchProductsRequest : () => (
        (dispatch) => {
            callApi('products', 'GET', null).then(res => {
                dispatch(this.fetchProducts(res.data))
            })
        }
    )
}