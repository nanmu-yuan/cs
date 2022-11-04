import { Link } from "react-router-dom"
const Message = ()=>{
    return(
        <div>
            <span>我是message</span>
            <div>
                <Link to={{
                    pathname:'/',
                    state:'12312321'
                }}>跳转首页</Link>
            </div>
        </div>
    )
}
export default Message