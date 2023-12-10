const initialState = {
    singletype: [],
    isLoading: true
}


const singleTypeReducer = (state = initialState, action) => {
    switch(action.type){
        case "TYPE":
            return{
                singletype : action.payload.typeName,
                isLoading : false
            }
        default:
            return state
    }
}



export {singleTypeReducer}