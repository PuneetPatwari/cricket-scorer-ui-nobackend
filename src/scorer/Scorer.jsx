import React from 'react';
import ScoreBoard from './Scoreboard';
import CurrentOverStatus from './CurrentOverStatus';

const Scorer = () => (
  <div>
    <ScoreBoard />
    <br />
    <CurrentOverStatus />
  </div>
);

export default Scorer;
