import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function BtnFeedback({ options, onLeaveFeedback }) {
    return (
      <div>
      {options.map(option => (
        <Button key={option} name={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </div>
    );


  }

  BtnFeedback.prototype = {
    options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
  }