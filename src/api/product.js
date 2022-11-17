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
// export const queryProduct =(params)=>{
//     params = params || {};
//     return axiosBase.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json',params)
// }
export const queryProduct =(params)=>{
    params = params || {};
    return axiosBase.get('https://smartsend.seamarketings.com/api/v3/base_template/',params)
}