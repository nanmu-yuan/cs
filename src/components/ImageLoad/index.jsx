
import { useContext } from 'react'
import { ImageDispatch } from '../../context/ImageContext/ImageContextProvider'
import { ImageStateContext } from '../../context/ImageContext/ImageContextProvider'
import {register} from '../../api/product'
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
    const params = {
        username:'ck',
        password:'123456'
    }
    register(params).then(res=>{
        console.log(res)
    });
    console.log(123)
}
export default ImageLoad