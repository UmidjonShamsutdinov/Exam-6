import instance from "../../services"

export const singleType = (typeName) => {
    return{
        type: "TYPE",
        payload: {
            typeName
        }
    }
}



const singleTypE = (type) => async dispatch => {
    instance(`/products.json?product_type=${type}`)
        .then(res => dispatch(singleType(res.data)))
        .catch(err => console.log(err))
}


export {singleTypE}