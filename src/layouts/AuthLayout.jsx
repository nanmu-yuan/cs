const AuthLayout =({children})=>{
    return(
        <div className="container text-center">
            <div><span>LOGON</span></div>
            <div>{children}</div>
        </div>
    )
}
export default AuthLayout