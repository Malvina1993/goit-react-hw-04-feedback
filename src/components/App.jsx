import { Component } from "react";
import { Statistic } from "./Statistics/Statistic";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component{
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
    
    countTotalFeedback = () => {
      return (this.state.good + this.state.neutral+ this.state.bad)
      
    }
  
    countPositiveFeedbackPercentage = () => {
      if (this.countTotalFeedback() === 0) {
        return (0);
      }
      return ((this.state.good / this.countTotalFeedback()).toFixed(2) * 100);
    }

      handleLeaveFeedback = event => {
        const name = event.target.name;
        
        if (name === 'good') {
          this.setState(prevState => {
            return {
              good: prevState.good + 1,
            }
          })
        }

        if (name === 'neutral') {
          this.setState(prevState => {
            return {
              neutral: prevState.neutral + 1,
            }
          })
        }

        if (name === 'bad') {
          this.setState(prevState => {
            return {
              bad: prevState.bad + 1,
            }
          })
        }
        
        
      }

  
  render() {
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
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        
        <Section title="Statistic">
          {(this.countTotalFeedback() && (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />)) || (
            <Notification
              message = {"There is no feedback"}
            />
          )}
        </Section>

      </div>
    );
  }
};
