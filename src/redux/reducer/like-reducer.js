const initialState = {
    like: [],
    isLoading: true
}


const addToLikeReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case "ADDTOLIKE":
            let newCart = state.like
            const product_index = state.like.findIndex(product=> product.id === action.payload.like.id)
            if(product_index === -1){
                newCart = [...state.like, action.payload.like]
            }
            return{
                like : newCart,
                isLoading : false
            }
        default:
            return state
    }
}

export {addToLikeReducer}