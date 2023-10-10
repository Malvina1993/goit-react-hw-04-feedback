import css from "./FeedbackOptions.module.css";
import { Component } from "react";

export class FeedbackOptions extends Component{
    render() {
        return (
       
        <div className = {css.feedback}>
            <button name="good" className = {css.btnOpt} onClick={this.props.onLeaveFeedback}>Good</button>
            <button name = "neutral" className = {css.btnOpt} onClick={this.props.onLeaveFeedback}>Neutral</button>
            <button name="bad" className = {css.btnOpt} onClick={this.props.onLeaveFeedback}>Bad</button>
        </div>
    )
    }
    
}