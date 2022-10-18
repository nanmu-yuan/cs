
import { useContext } from 'react'
import { ImageDispatch } from '../../context/ImageContext/ImageContextProvider'
import { ImageStateContext } from '../../context/ImageContext/ImageContextProvider'
import axios from 'axios'
import './style.scss'
const PayBox = () => {
    const state = useContext(ImageStateContext);
    return (
        <div className="paybox">
            <div className="imgload"></div>
            <img src={state.path} alt="" />
        </div>
    )
}
const BtnBox = () => {
    return (
        <div className="btnbox">
            <button>GET IMA</button>
        </div>
    )
}
const ImageUpload = () => {
    const dispatch = useContext(ImageDispatch)
    const change =(e)=>{
        console.log(e.target.files[0])
        getImage(dispatch,e.target.files[0])
    }
    return (
        <div className="imgupload">
            <input onChange={change}  type="file" />
        </div>
    )
}
const ImageLoad = () => {
    return (
     
        <div className="imgcontent">
            <PayBox></PayBox>
            <div className="chanalbox">
                <BtnBox></BtnBox>
                <ImageUpload></ImageUpload>
            </div>
        </div>
    )
}

const getImage =(dispatch,imgvalue)=>{
    const formData = new FormData();
    formData.append("picture[]",imgvalue);
    axios({
        method:'post',
        url:'http://www.allindesk.com/api/storage/oss/upload/ec4199002b34475bc00cdeb2a56feb9a70242e75',
        processData: false, 
        contentType: false, 
        dataType: 'json',
        data:formData
    }).then(res=>{
        const {file_urls} = res.data.data
        dispatch({
            type:'GET_IMAGE',
            play:{
                path:file_urls[0]
            }
        })
    }).catch(error=>{
        console.log(error)
    })
}
export default ImageLoad