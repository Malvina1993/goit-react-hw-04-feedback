import { useState } from "react";
import { Statistic } from "./Statistics/Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App =() => {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  // }
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    
    const countTotalFeedback = () => {
      return (good + neutral+ bad)
      
    }
  
    const countPositiveFeedbackPercentage = () => {
      if (countTotalFeedback() === 0) {
        return (0);
      }
      return ((good / countTotalFeedback()).toFixed(2) * 100);
    }

      const handleLeaveFeedback = event => {
        const name = event.target.name;
        
        if (name === 'good') {
          // this.setState(prevState => {
          //   return {
          //     good: prevState.good + 1,
          //   }
          // })
          setGood(good + 1);
        }

        if (name === 'neutral') {
          // this.setState(prevState => {
          //   return {
          //     neutral: prevState.neutral + 1,
          //   }
          // })
          setNeutral(neutral + 1);
        }

        if (name === 'bad') {
          // this.setState(prevState => {
          //   return {
          //     bad: prevState.bad + 1,
          //   }
          // })
          setBad(bad + 1);
        }
        
        
      }

  
  
    return (
      <div
        style={{
          height: '100vh',
          padding: 48,
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistic">
          {(countTotalFeedback() && (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />)) || (
            <Notification
              message = {"There is no feedback"}
            />
          )}
        </Section>

      </div>
    );
  
};
