import { GlobalStyle } from "./GlobalStyled";
import React,{ useState } from "react";
import { BtnFeedback } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

// import { Component } from 'react';
import { Container } from "./Container";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = event => {
//     this.setState(prevState => {
//       return { [event.target.name]: prevState[event.target.name] + 1 };
//     });
//   };
//   countTotalFeedback = () => {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   };
//   countPositivePercentage = () => {
//     if (this.state.good) {
//       const positivePercentage = Math.round(
//         this.state.good / (this.countTotalFeedback() / 100)
//       );
//       return positivePercentage;
//     }
//     return 0;
//   }


// // export const App = () => {
// render () {
//   return (
//     <Container
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         // color: '#010101'
//       }}
//     >
//       <GlobalStyle/>
     
//       <Section title="Please leave feedback">
//         <BtnFeedback
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//       </Section>
//       <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositivePercentage()}/>
//           ) : (
//             <Notification message="There is no feedback" />
//             // <p>There is no feedback</p>
//           )}
//         </Section>
      
      

//     </Container>
//   );
// };
// };

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = options => {
    console.log(options)
 
    switch (options.target.name) {
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

