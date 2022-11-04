import * as axiosBase from './index'

export const queryImagePath =(params)=>{
    params = params || {};
    return axiosBase.get('/api/xxx',params)
}
export const register = (params)=>{
    params = params || {}
    return axiosBase.post('/api/register',params)
}
export const login = (params)=>{
    params = params || {};
    return axiosBase.post('/api/login',params)
}
