import React, { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import s from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  // Збереження стану у localStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div className="s.app">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options
        updateFeedback={updateFeedback}
        hasFeedback={totalFeedback > 0}
        resetFeedback={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default App;
