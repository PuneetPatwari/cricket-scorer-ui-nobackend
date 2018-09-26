const isStrikerOrNonStriker = function (name, striker, nonStriker) {
  return name === striker || name === nonStriker;
};

const calcBatsmenRuns = function (name, overDetails) {
  let runs = 0;
  overDetails.forEach( (over) => { 
    over.ballDetails.forEach( (ball) => {
      runs += ball.batsman === name ? ball.runs : 0; 
    });
  });
  return runs;
};

export { isStrikerOrNonStriker, calcBatsmenRuns };
