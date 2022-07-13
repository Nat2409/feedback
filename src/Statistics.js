import React, { Component } from 'react';

export default function Statistics({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      {/* {total}===0 && {message} */}
      <li> Good: {good}</li>
      <li> Neutral: {neutral}</li>
      <li> Bad: {bad}</li>
      <li> Total: {total}</li>
      <li> PositiveFeedback: {positivePercentage}&#37;</li>
    </ul>
  );
}
