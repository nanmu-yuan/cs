import { Link,Switch,Route} from "react-router-dom"
import About from "../components/TransitionCroup/About"
import Cs from "../components/TransitionCroup/Cs"
import "../assets/scss/components/TransitionGrop.scss"
import {TransitionGroup,CSSTransition} from 'react-transition-group'
const box = (props)=>{
    console.log(props)
    return (
        <div className="TransitionGrop">
            <div className="changeBtn">
            <div className="btn-l"><Link to="/about">ABOUT</Link></div>
            <div className="btn-r"><Link to="/cs">Cs</Link></div>
            </div>
            <div>
                <TransitionGroup>
                    <CSSTransition timeout={2000} classNames={'dg'} unmountOnExit={true} key={props.location.pathname} >
                        <Switch location={props.location}>
                            <Route path="/about" component={About}></Route>
                            <Route path="/cs" component={Cs}></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    )
}
export default box