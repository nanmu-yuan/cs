const AuthLayout =({children})=>{
    return(
        <div id="auth">
            <div><span>LOGON</span></div>
            <div>{children}</div>
        </div>
    )
}
export default AuthLayout