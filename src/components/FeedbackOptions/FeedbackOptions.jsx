import css from "./FeedbackOptions.module.css";


export const FeedbackOptions = ({ onLeaveFeedback }) => {
    
    return (
       
        <div className = {css.feedback}>
            <button name="good" className = {css.btnOpt} onClick={onLeaveFeedback}>Good</button>
            <button name = "neutral" className = {css.btnOpt} onClick={onLeaveFeedback}>Neutral</button>
            <button name="bad" className = {css.btnOpt} onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
    
    
}