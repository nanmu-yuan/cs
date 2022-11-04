import {createContext, useEffect, useReducer } from "react"
import useLocalStorage from "../../hooks/useLocalStorage";


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
    const [imgState,setImgState] = useLocalStorage('imgUrl',null);
    const initImage = {
        path: imgState|| '',
        name:'demo'
    }
    const [state,dispath] = useReducer(reducer,initImage);
    useEffect(()=>{
        setImgState(state.path)
    },[state.path])
    return (
        <ImageStateContext.Provider value={state}>
            <ImageDispatch.Provider value={dispath}>
                {children}
            </ImageDispatch.Provider>
        </ImageStateContext.Provider>
    )

}

export default ImageContextProvider