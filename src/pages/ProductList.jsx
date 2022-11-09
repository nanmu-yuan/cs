import { getProduct, ProductDispatchContext, ProductStateContext } from "../context/ProductProvider"
import { useContext,useState } from "react"
import List from "../components/Product/Product"
import { useEffect } from "react"
const ProductList =()=>{
    const state = useContext(ProductStateContext)
    const dispatch = useContext(ProductDispatchContext);
    const initState = {
        name:'12312'
    }
    const [data,setData] = useState(initState);
    const change =()=>{
        console.log(data);
        dispatch({
            type:'CHANGE',
            play:data
        })
    }
    const input=(e)=>{
       setData((state)=>{
            return({
                ...state,
                name:e.target.value
            })
       })
    }
    useEffect(()=>{
        getProduct(dispatch)
    },[])
    return (
        <div className="list-container">
            我是列表页面
            <div>
                <input type="text" value={data.name} onChange={input}/>
                <button onClick={change}>CHANGE</button>
                <List data={state}></List>
            </div>
        </div>
    )
}
export default ProductList