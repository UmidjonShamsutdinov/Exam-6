import instance from "../../services"

export const product = (singleproduct) => {
    return{
        type: "PRODUCT",
        payload: {
            singleproduct
        }
    }
}



const singleProduct = (id) => async dispatch => {
    instance(`/products/${id}.json`)
        .then(res => dispatch(product(res.data)))
        .catch(err => console.log(err))
}


export {singleProduct}