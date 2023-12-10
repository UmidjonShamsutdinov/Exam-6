const initialState = {
    cart: [],
    isLoading: true
}


const addToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADDTOCART":
            let newCart = state.cart
            const product_index = state.cart.findIndex(product=> product.id === action.payload.product.id)
            if(product_index === -1){
                newCart = [...state.cart, action.payload.product]
            }
            return{
                cart : newCart,
                isLoading : false
            }
        default:
            return state
    }
}

export {addToCartReducer}