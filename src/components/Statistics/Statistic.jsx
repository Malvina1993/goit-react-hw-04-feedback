import css from './Statistics.module.css';
import { Component } from "react";

export class Statistic extends Component  {
    render() {
        return (
        <div>
            <ul className={css.statistic}>
                <li>Good: {this.props.good}</li>
                <li>Neutral: {this.props.neutral}</li>
                <li>Bad: {this.props.bad}</li>
                <li>Total: {this.props.total}</li>
                <li>Positive feedback: {this.props.positivePercentage}%</li>
            </ul>
        </div>
    )
    }

    
}