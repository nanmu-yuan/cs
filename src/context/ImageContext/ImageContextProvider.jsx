import {createContext, useReducer } from "react"
const initImage = {
    path:'https://cdn.shopify.com/s/files/1/0598/7955/5231/files/KOL_2.jpg?v=1661654282',
    name:'demo'
}

export const ImageStateContext = createContext();
export const ImageDispatch= createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'GET_IMAGE':
            return{
                ...state,
                path:action.play.path
            }
        case 'GET_NAME':
            return{
                ...state
            }
        default:
           throw new Error(`unkonw action ${action.type}`)
            
    }
}
const ImageContextProvider =({children})=>{
    const [state,dispath] = useReducer(reducer,initImage);
    return (
        <ImageStateContext.Provider value={state}>
            <ImageDispatch.Provider value={dispath}>
                {children}
            </ImageDispatch.Provider>
        </ImageStateContext.Provider>
    )

}

export default ImageContextProvider