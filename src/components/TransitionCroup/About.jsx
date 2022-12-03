
import { useState } from "react"
import { CSSTransition } from 'react-transition-group'
const init = {
    show: false
}
const About = () => {
    const [show, setShow] = useState(init)

    const change = () => {
        setShow((state) => {
            console.log(state);
            if (state.show) {
                return {
                    show: false
                }
            } else {
                return {
                    show: true
                }
            }

        })

    }

    return (
        <div className="About">
            <h5>about</h5>
            <div className={'container'}>
                <div className={'square-wrapper'}>
                    <CSSTransition in={show.show} timeout={500} classNames={'fade'} unmountOnExit={true}>
                        <div className="square"></div>
                    </CSSTransition>
                </div>
                
                <button onClick={change}>toggle</button>
            </div>
        </div>
    )
}
export default About