const CommonLayout=({children})=>{
    
    return (
        <div className="container">
            <header>header</header>
            <main>
                {children}
                </main>
            <footer>footer</footer>
        </div>
    )
}
export default CommonLayout