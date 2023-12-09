import { combineReducers } from "redux";
import { productReducer } from "./products-reducer";
import { byCategoryReducer } from "./by-category-reducer";
import { singleproductReducer } from "./single-product-reducer";

const rootReducer = combineReducers({
    products_data : productReducer,
    single_category_data: byCategoryReducer,
    single_product_data : singleproductReducer
})


export default rootReducer