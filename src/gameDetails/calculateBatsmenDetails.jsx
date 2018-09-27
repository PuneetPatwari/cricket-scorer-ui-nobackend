const isStrikerOrNonStriker = function (name, striker, nonStriker) {
  return name === striker || name === nonStriker;
};

const calcBatsmenRuns = function (name, overDetails) {
  let runs = 0;
  overDetails.forEach((over) => {
    over.ballDetails.forEach((ball) => {
      runs += ball.batsman === name ? ball.runs : 0;
    });
  });
  return runs;
};

const calcBatsmenBalls = function (name, overDetails, isBatsmenOnStrike) {
  let balls = 0;
  overDetails.forEach((over) => {
    over.ballDetails.forEach((ball) => {
      balls += ball.batsman === name ? 1 : 0;
    });
  });
  balls += isBatsmenOnStrike ? 0 : 1;
  return balls;
};

const calcBatsmen4sand6sBalls = function (name, overDetails) {
  let balls4s = 0;
  let balls6s = 0;
  overDetails.forEach((over) => {
    over.ballDetails.forEach((ball) => {
      balls4s += (ball.batsman === name && ball.runs === 4) ? 1 : 0;
      balls6s += (ball.batsman === name && ball.runs === 6) ? 1 : 0;
    });
  });
  return { fours: balls4s, sixs: balls6s };
};

const calcStrikeRate = function (totalRuns, totalBalls) {
  if (totalRuns === 0 || totalBalls === 0) {
    return 0;
  }
  let strikeRate = (totalRuns / totalBalls) * 100;
  strikeRate = Number.isInteger(strikeRate) ? strikeRate : Number(strikeRate.toFixed(2));
  return strikeRate;
};


export {
  isStrikerOrNonStriker, calcBatsmenRuns,
  calcBatsmenBalls, calcBatsmen4sand6sBalls, calcStrikeRate,
};
