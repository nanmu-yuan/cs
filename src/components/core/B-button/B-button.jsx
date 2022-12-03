import React from "react";
import './B-button.scss'
class B_button extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="Bbtn" onClick={this.props.change}>
                {this.props.children?this.props.children:'CLICK'}
            </div>
        )
    }
}
const B_buttonWarper = (WrappedComponent)=>{
    return class extends WrappedComponent{
        constructor(props){
            super(props)
        }
        render(){
            return super.render()
        }
    }
}
export default B_buttonWarper(B_button)