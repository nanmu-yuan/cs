import { useEffect, useState } from "react";
import axios from 'axios'


const useAxios =(imgvalue)=>{
    const [data,setData] = useState();
    const [error,setError] = useState();
    const formData = new FormData();
    formData.append("picture[]",imgvalue);
    useEffect(()=>{
        axios({
            method:'post',
            url:'http://www.allindesk.com/api/storage/oss/upload/ec4199002b34475bc00cdeb2a56feb9a70242e75',
            processData: false, 
            contentType: false, 
            dataType: 'json',
            data:formData
        }).then(res=>{
            setData(res)
        }).catch(error =>{
            setError(error)
        })
    },imgvalue)
    return [data,error]
}
export default useAxios