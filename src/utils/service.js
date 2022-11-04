// 封装axios
import axios from 'axios'

//创建服务
const service = new axios.create({
    baseURL:'/',
    timeout:'1000*60',
    headers:{
        "Content-Type":'application/json;charset=UTF-8'
    }
})
// 请求拦截器
service.interceptors.request.use((config)=>{
    let token = localStorage.getItem('token');
    if(token){
        config.headers.authorization = token;
    }
    return config
},error=>{
    return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use((response)=>{
    return response.data
},error=>{
   return Promise.reject(error)
})

export default service