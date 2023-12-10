import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "../reducer";

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ["products_data", "single_category_data", "single_product_data", "single_type_data", "add_to_cart_data", "currency_data", "liked_data"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))
persistStore(store)

export { store }


