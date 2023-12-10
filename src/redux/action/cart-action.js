

export const addCart = (product) => {
    return{
        type: "ADDTOCART",
        payload: {
            product
        }
    }
}



const addCartThunk = (product) => async dispatch => {
    dispatch(addCart(product))
}


export {addCartThunk}