const fetchBowlerStats = (bowlerName, overDetails) => {
  const overDetailsForABowler = overDetails.filter(over => over.bowler === bowlerName);
  return overDetailsForABowler.reduce(
    (overDetailAcc, over) => {
      const runInTHisOver = over.ballDetails.reduce(runReducer, 0);
      overDetailAcc.totalMaidenOvers += runInTHisOver ? 0 : 1;
      overDetailAcc.totalRunsConceded += runInTHisOver;
      const validBallsInAnOver = over.ballDetails.filter(ball => ball.extra === '').length;
      overDetailAcc.totalOversBowled += calculateTotalOversBowled(validBallsInAnOver);
      overDetailAcc.totalWicketsTaken += over.ballDetails.filter(ball => ball.batsman === '').length;
      return overDetailAcc;
    },
    {
      totalRunsConceded: 0,
      totalMaidenOvers: 0,
      totalOversBowled: 0,
      totalWicketsTaken: 0
    }
  );
};

export default fetchBowlerStats;

const runReducer = (acc, ballDetails) => {
  acc += ballDetails.runs;
  acc += ballDetails.extra === 'W' || ballDetails.extra === 'N' ? 1 : 0;
  return acc;
};

const calculateTotalOversBowled = totalBalls => (totalBalls === 6 ? 1 : (totalBalls % 6) / 10);
