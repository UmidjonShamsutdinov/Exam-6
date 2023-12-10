export const addLike = (like) => {
    return{
        type: "ADDTOLIKE",
        payload: {
            like
        }
    }
}



const addLikeThunk = (like) => async dispatch => {
    dispatch(addLike(like))
}


export {addLikeThunk}