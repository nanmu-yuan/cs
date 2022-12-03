import React,{Component} from "react"
export default (WarperWidthComponent)=>{
    return class NewComponent extends Component{
        constructor(props){
            super(props)
            this.state={
                username:''
            }
        }
        componentDidMount(){
            console.log('12')

        }
        componentWillMount(){
            let username = localStorage.getItem('username');
            this.setState({
                username:username
            })
        }
        render(){
            return(<WarperWidthComponent username={this.state.username}></WarperWidthComponent>)
        }
    }
}
