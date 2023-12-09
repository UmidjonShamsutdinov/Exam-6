const initialState = {
    product: [],
    isLoading: true
}


const singleproductReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCT":
            return{
                product : action.payload.singleproduct,
                isLoading : false
            }
        default:
            return state
    }
}



export {singleproductReducer}