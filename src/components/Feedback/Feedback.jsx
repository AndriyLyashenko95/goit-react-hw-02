import React from 'react';
import './FeedBack.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className="Feedback">
    <h2>Feedback Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total Feedback: {totalFeedback}</p>
    <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

export default Feedback;