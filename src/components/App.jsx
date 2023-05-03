import { GlobalStyle } from "./GlobalStyled";
import React,{ useState } from "react";
import { BtnFeedback } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

import { Container } from "./Container";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = option => {
    // console.log(option)
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        console.log('error');
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      const feedbackPercentage = Math.round(
        (good / countTotalFeedback()) * 100
      );
      return feedbackPercentage;
    }
    return 0;
  };
  return(
    <Container
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      // color: '#010101'
    }}
  >
    <GlobalStyle/>
   
    <Section title="Please leave feedback">
      <BtnFeedback
         options={['good', 'neutral', 'bad' ]}
          onLeaveFeedback={onLeaveFeedback}
        />
    </Section>
    <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          feedbackPercentage={countPositiveFeedbackPercentage()}/>
        ) : (
          <Notification message="There is no feedback" />
          // <p>There is no feedback</p>
        )}
      </Section>
    
    

  </Container>
  )
}

