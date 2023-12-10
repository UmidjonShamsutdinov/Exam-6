import { combineReducers } from "redux";
import { productReducer } from "./products-reducer";
import { byCategoryReducer } from "./by-category-reducer";
import { singleproductReducer } from "./single-product-reducer";
import { singleTypeReducer } from "./single-type-reducer";
import { addToCartReducer } from "./cart-reducer";
import { currencyReducer } from "./currency-reducer";
import { addToLikeReducer } from "./like-reducer";

const rootReducer = combineReducers({
    products_data : productReducer,
    single_category_data: byCategoryReducer,
    single_product_data : singleproductReducer,
    single_type_data : singleTypeReducer,
    add_to_cart_data : addToCartReducer,
    currency_data : currencyReducer,
    liked_data : addToLikeReducer
})


export default rootReducer