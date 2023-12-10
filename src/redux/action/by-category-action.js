import instance from "../../services";


export const byCategory = (singleCat) => {
    return{
        type: "CATEGORY",
        payload: {
            singleCat
        }
    }
}



const byCategoryThunk = (category) => async dispatch => {
    try {
        let params = category.split("&")
        
        params[1] === undefined ? instance(`/products.json?product_category=${params[0]}`)
            .then(res => {
                dispatch(byCategory(res.data));
        })
        .catch(err => console.log(err))
        :
        instance(`/products.json?product_category=${params[0]}&&product_type=${params[1]}`)
            .then(res => {
                dispatch(byCategory(res.data));
        })
        .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
    }
}


export {byCategoryThunk}
