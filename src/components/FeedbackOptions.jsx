import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.options}>
    {options.map((option) => (
      <button className={css.options__button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;