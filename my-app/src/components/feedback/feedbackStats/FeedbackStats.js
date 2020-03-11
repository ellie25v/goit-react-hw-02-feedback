import React from "react";

const FeedbackStats = ({ data, total, percentages }) => {
    return (
        <>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good: <span>{data.good}</span>
            </li>
            <li>
              Neutral: <span>{data.neutral}</span>
            </li>
            <li>
              Bad: <span>{data.bad}</span>
            </li>
            <li>
              Total: <span>{total}</span>
            </li>
            <li>
              Positive feedback: <span>{percentages}%</span>
            </li>
          </ul>
        </>
      );
    };

export default FeedbackStats;