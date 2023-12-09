const initialState = {
    products: [],
    isLoading: true
}


const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCTS":
            return{
                products : action.payload.allproducts,
                isLoading : false
            }
        default:
            return state
    }
}



export {productReducer}