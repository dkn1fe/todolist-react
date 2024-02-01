import { Component } from "react";
import DontFindTask  from '../dontFindTask/DontFindTask'

class ErrorBoundary extends Component {
    state = {
        error:false,
    }

    componentDidCatch(error){
         this.setState({error:true})
    }

    render(){
        if(this.state.error){
            return <DontFindTask/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
