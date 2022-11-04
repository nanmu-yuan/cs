import {Route} from 'react-router-dom'

const RouterWrapper=({
    component:Component,
    layout:Layout,
    ...rest
})=>{
    return(
        <Route
            {...rest}
            render={
                (props)=>{
                    return (
                        <Layout {...props}>
                            <Component {...props}></Component>
                        </Layout>
                    )
                }
            }
        

        />
    )
}
export default RouterWrapper