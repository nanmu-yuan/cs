import React from "react";
class List extends React.Component{
    constructor(pops){
        super(pops)
    }
    render(){
        return(
            <div>
                12312321312
            </div>
        )
    }
}
function widthTime(wrappedComponent){
    return class extends wrappedComponent{
        constructor(props){
            super(props);
            this.start = 0;
            this.end = 0;
        }
        componentWillMount(){
            super.wrappedComponent && super.componentWillMount();
            this.start = Date.now()
        }
        componentDidMount(){
            super.wrappedComponent && super.componentDidMount();
            this.end = Date.now(0)
            console.log(`${wrappedComponent.name} 组件渲染时间为 ${this.end - this.start}`)
        }
        render(){
            return super.render()
        }
    }
}
export default widthTime(List)
