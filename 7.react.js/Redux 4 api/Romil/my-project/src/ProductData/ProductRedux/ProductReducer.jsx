import { PRODUCT_SET } from "./ProductConstant";

const ProductReducer = (data = [] , action) => {
    switch(action.type) {
        // case PRODUCT_ADD:
        //     console.warn('ProductReducer Called' , data);
        //     return [action.data , ...data]

        case PRODUCT_SET:
            console.warn('ProductReducer Called' , data);
            return [action.data]    
        default: return data
    }
}

export default ProductReducer