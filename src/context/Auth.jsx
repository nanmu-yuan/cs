import { createContext, useReducer } from "react"
export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();
const initState = {
    isLoggedIn: false,
    user: null,
    isLoggingIn: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGON_REQUEST': {
            return {
                ...state
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                user:action.payload.user
            }
        }
        case 'LOGOUT_SUCCESS': {
            return ({
                ...state
            })
        }
        case 'LOGON_FAIL': {
            return {
                ...state
            }
        }
        default:
            throw new Error(`unkonw action:${action.type}`)
    }
}
export const signIn = (dispatch, userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch({
        type: 'LOGOUT_SUCCESS',
        payload: {
            user: userData
        }
    })
}
export const siginOut = (dispatch) => {
    localStorage.clear();
    return (
        dispatch({
            type: 'LOGOUT_SUCCESS'
        })
    )
}
const AuthProivder = ({ children }) => {
    const persistedUserState = {
        ...initState
    }
    const [state, dispatch] = useReducer(reducer, persistedUserState)
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )

}
export default AuthProivder
