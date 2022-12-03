import React from "react";
import './B-select.scss'
class Bselect extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="bselect">
                <input type="text" />
                <span className="bselect-icon"></span>
            </div>
        )
    }
}
const SelectWarper =(warperComponent)=>{
    return class extends warperComponent{
        constructor(props){
            super(props)
        }
        render(){
            return(super.render())
        }
    } 
}
export default SelectWarper(Bselect)