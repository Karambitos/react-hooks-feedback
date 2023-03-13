import { useState } from 'react';
import Notification from '../Notification';
import Graph from '../Graph';
import FeedbackStatistics from '../FeedbackStatistics';
import FeedbackButtons from '../FeedbackButtons';

export default function Feedback() {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return Object.values(feedbackState).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    let percent = 0;
    const total = countTotalFeedback();
    percent = Math.round((feedbackState.good / total) * 100);
    return percent;
  };

  const handleClick = event => {
    const name = event.target.name;

    setFeedbackState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackButtons options={feedbackState} handleClick={handleClick} />
      {countTotalFeedback() !== 0 ? (
        <>
          <Graph options={feedbackState} />
          <FeedbackStatistics
            state={feedbackState}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}
