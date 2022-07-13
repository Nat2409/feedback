import React, { Component } from 'react';

export default function FeedbackOptions({ onClickButton }) {
  return (
    <>
      {/* <h1>Please leave feedback</h1> */}
      <button type="button" name="good" onClick={onClickButton}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onClickButton}>
        Neutural
      </button>
      <button type="button" name="bad" onClick={onClickButton}>
        Bad
      </button>
      {/* <h2>Statistics</h2> */}
    </>
  );
}
