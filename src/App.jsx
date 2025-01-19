import React, { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem('feedback');
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
    };
    
    const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedbackPercentage = Math.round((feedback.good / totalFeedback) * 100) || 0;

    return (
    <div className="App">
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;