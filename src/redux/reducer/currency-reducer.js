const initialState = {
    currency: "",
    isLoading: true
}


const currencyReducer = (state = initialState, action) => {
    switch(action.type){
        case "SETCURRENCY":
            return{
                currency : action.payload.value
            }
        default:
            return state
    }
}



export {currencyReducer}