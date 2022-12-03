import WarperWidthComponent from "../WarperWidthComponent";
const FixUsername = (props)=>{
    const {username} = props;
    return(
        <div><span>Fix 获取username:</span><span>{username}</span></div>
    )
}
const QueryUsername = (props)=>{
    const {username} = props;
    return(
        <div>
            <span>Query获取username:</span><span>{username}</span>
        </div>
    )
}

export const Fix = WarperWidthComponent(FixUsername);
export const Query = WarperWidthComponent(QueryUsername);