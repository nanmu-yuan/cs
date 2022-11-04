import service from '../utils/service'
// 封装post get ... 模块
export const post = (url,params)=>{
    return new Promise((resolve,reject)=>{
        service.post(url,params)
        .then(res=>{
            resolve(res)
        },error=>{
            reject(error)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export const get =(url,params)=>{
    let queryStr = ''
    for(let key in params){
        if(params[key]){
            queryStr+=`${key}=${params[key]}&`
        }
    }
    return new Promise((resolve,reject)=>{
        service.get(`${url}?${queryStr}`)
        .then(res=>{
            resolve(res)
        },error=>{
            reject(error)
        })
        .catch(error=>{
            reject(error)
        })
        
    })
}






