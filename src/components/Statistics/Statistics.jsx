import React from 'react';
import { StatisticItem, Span } from './Statistics.module';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <StatisticItem>
          <Span>Good:</Span>
          {good}
        </StatisticItem>
        <StatisticItem>
          <Span>Neutral:</Span>
          {neutral}
        </StatisticItem>
        <StatisticItem>
          <Span>Bad:</Span>
          {bad}
        </StatisticItem>
        <StatisticItem>
          <Span>Total:</Span>
          {total}
        </StatisticItem>
        <StatisticItem>
          <Span>PositivePercentage:</Span>
          {positivePercentage}%
        </StatisticItem>
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
