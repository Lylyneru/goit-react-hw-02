import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, total }) => {
  return (
    <div className={s.optionsContainer}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {total > 0 && (
        <button onClick={resetFeedback} className={s.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
