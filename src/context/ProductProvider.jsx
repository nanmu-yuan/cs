import { createContext } from "react";
import { useReducer } from "react";
import {queryProduct} from '../api/product'
const initProductData = {
    name:'phone',
    price:'$100',
    info:'made in china',
    list:[]
}
export const ProductStateContext  = createContext();
export const ProductDispatchContext = createContext();
const reducer = (state,active)=>{
    switch(active.type){
        case 'QUERY_LIST':
            return {
                ...state,
                list:active.play.data
            }
        case 'CHANGE':
            return {
                ...state,
                name: active.play.name
            }
        default:
            throw new Error(`Unknow action`)
    }
}
const ProductProvider =({children})=>{
    const [state,dispatch] = useReducer(reducer,initProductData)
    return(
        <ProductStateContext.Provider value={state}>
            <ProductDispatchContext.Provider value={dispatch}>
                {children}
            </ProductDispatchContext.Provider>
        </ProductStateContext.Provider>
    )
}
export default ProductProvider

export const getProduct =(dispatch)=>{
    queryProduct().then(res=>{
        console.log(res)
        dispatch({
            type:'QUERY_LIST',
            play:{
                data:res
            }
        })
    })
}