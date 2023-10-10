import { Component } from "react";

export class Section extends Component {
    render() {
       return(
        <div>
            <p>{ this.props.title}</p>
            {this.props.children}
        </div>
    )
   }
    
}