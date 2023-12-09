import instance from "../../services";


export const byCategory = (singleCat) => {
    return{
        type: "CATEGORY",
        payload: {
            singleCat
        }
    }
}



console.log(1);
const byCategoryThunk = (category) => async dispatch => {
    instance(`/products.json?product_category=${category}`)
        .then(res => {
            dispatch(byCategory(res.data));
        })
        .catch(err => console.log(err))
}


export {byCategoryThunk}
