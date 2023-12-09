import instance from "../../services"

export const products = (allproducts) => {
    return{
        type: "PRODUCTS",
        payload: {
            allproducts
        }
    }
}



const proDucts = () => async dispatch => {
    instance("/products.json")
        .then(res => dispatch(products(res.data)))
        .catch(err => console.log(err))
}


export {proDucts}

