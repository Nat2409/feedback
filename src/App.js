import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickButtonHandler = e => {
    const name = e.target.name;

    this.setState(prevState => {
      return {
        ...prevState,
        [name]: (prevState[name] += 1),
      };
    });
  };
  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;

    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral } = this.state;
    const positiveFeedback = good + neutral;
    const positiveFeedbackPercentage = Math.trunc(
      (positiveFeedback * 100) / this.countTotalFeedback()
    );

    return positiveFeedbackPercentage;
  }
  render() {
    const { good, bad, neutral } = this.state;

    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions onClickButton={this.onClickButtonHandler} />
          }
        />
        <Section
          title="Statistics"
          children={
            this.countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback"></Notification>
            ) : (
              <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )
          }
        />
      </>
    );
  }
}

export default App;
