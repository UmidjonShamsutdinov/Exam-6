export const currency = (value) => {
    return{
        type: "SETCURRENCY",
        payload: {
            value
        }
    }
}



const currencyThunk = (value) => async dispatch => {
    dispatch(currency(value))
}


export {currencyThunk}