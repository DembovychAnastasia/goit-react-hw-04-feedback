import propTypes from 'prop-types';
import { StaticList } from './Statistics.styled';

export function Statistics ({ good, bad, neutral,title, totalFeedback,feedbackPercentage

}) {
return (
    <div>
        <h3> {title}</h3>
        <StaticList>
            <li>Good {good}</li>
            <li>Neutral {neutral}</li>
            <li>Bad {bad}</li>
            <li>Total {totalFeedback}</li>
            <li>Positive feedback: {feedbackPercentage} %</li>
            
        </StaticList>
    </div>

)
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    title: propTypes.string,
    totalFeedback: propTypes.number.isRequired,
    feedbackPercentage: propTypes.number.isRequired,
  };
