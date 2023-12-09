const initialState = {
    category: [],
    isLoading: true
}


const byCategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case "CATEGORY":
            return{
                category : action.payload.singleCat,
                isLoading : false
            }
        default:
            return state
    }
}



export {byCategoryReducer}