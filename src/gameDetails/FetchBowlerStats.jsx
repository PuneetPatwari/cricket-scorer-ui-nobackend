const fetchBowlerStats = function (bowlerName, overDetails) {
  let overs = 0;
  let runs = 0;
  let maiden = 0;
  let ballNumberForCurrentOver = 0;
  const wickets = 0;

  // Total run in a over
  // 
  overDetails.forEach((over) => {
    if (over.bowler === bowlerName) {
      let currentOverRuns = 0;
      ballNumberForCurrentOver = 0;
      over.ballDetails.forEach((ball) => {
        currentOverRuns += ball.runs;
        if (ball.extra === 'W' || ball.extra === 'N') {
          currentOverRuns += 1;
        }
        if (!(ball.extra === 'W' || ball.extra === 'N')) {
          ballNumberForCurrentOver += 1;
          if(ballNumberForCurrentOver === 6) {
            overs += 1;
            ballNumberForCurrentOver = 0;
          }
        }
      });
      if (currentOverRuns === 0 && ballNumberForCurrentOver === 0) {
        maiden += 1;
      }
      runs += currentOverRuns;

    }
  });
  const bowlerStats = {
    totalOversBowled: overs === 0 && ballNumberForCurrentOver === 0 ? 0 : overs > 0 && ballNumberForCurrentOver === 0 ? overs : overs + '.' + ballNumberForCurrentOver,
    totalRunsConceded: runs,
    totalMaidenOvers: maiden,
    totalWicketsTaken: wickets,
  };
  return bowlerStats;
};

export default fetchBowlerStats;
