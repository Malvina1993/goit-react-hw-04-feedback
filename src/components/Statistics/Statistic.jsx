import css from './Statistics.module.css';

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) =>  {
    
    return (
        <div>
            <ul className={css.statistic}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </ul>
        </div>
    )
    

    
}