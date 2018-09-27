import { isStrikerOrNonStriker, calcBatsmenRuns, calcBatsmenBalls, calcBatsmen4sand6sBalls, calcStrikeRate } from './calculateBatsmenDetails';

describe('gameDetails/calculateBatsmenDetails', () => {
  let striker;
  let nonStriker;
  beforeEach(() => {
    striker = 'Sachin';
    nonStriker = 'Sehwag';
  });
  it('isStrikerOrNonStriker should return true if it is striker/nonStriker', () => {
    const batsmenName = 'Sehwag';
    expect(isStrikerOrNonStriker(batsmenName, striker, nonStriker)).toEqual(true);
  });
  it('isStrikerOrNonStriker should return false if it is not striker/nonStriker', () => {
    const batsmenName = 'Test';
    expect(isStrikerOrNonStriker(batsmenName, striker, nonStriker)).toEqual(false);
  });

  it('calcBatsmenRuns should return total runs of batmsen', () => {
    const batsmenName = 'Sachin';
    const overDetails = [
      {
        bowler: 'Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 6, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
        ],
      }];
    expect(calcBatsmenRuns(batsmenName, overDetails)).toEqual(10);
  });

  it('calcBatsmenRuns should return total runs of batsmen ', () => {
    const batsmenName = 'Sachin';
    const overDetails = [
      {
        bowler: 'Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 1, extra: '' },
          { batsman: 'Sewagh', runs: 1, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
        ],
      }];
    expect(calcBatsmenRuns(batsmenName, overDetails)).toEqual(1);
  });

  it('calcBatsmenRuns should return total runs of batsmen ', () => {
    const batsmenName = 'Virat';
    const overDetails = [
      {
        bowler: 'Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 1, extra: '' },
          { batsman: 'Sewagh', runs: 1, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 4, extra: '' },
        ],
      },
      {
        bowler: 'Akshay',
        ballDetails: [
          { batsman: 'Sewagh', runs: 6, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 3, extra: '' },
        ],
      }];
    expect(calcBatsmenRuns(batsmenName, overDetails)).toEqual(13);
  });

  it('calcBatsmenBalls should return total balls of batsmen who is on strike', () => {
    const batsmenName = 'Virat';
    const isBatsmenOnStriker = true;
    const overDetails = [
      {
        bowler: 'Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 1, extra: '' },
          { batsman: 'Sewagh', runs: 1, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 4, extra: '' },
        ],
      },
      {
        bowler: 'Akshay',
        ballDetails: [
          { batsman: 'Sewagh', runs: 6, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 3, extra: '' },
        ],
      }];
    expect(calcBatsmenBalls(batsmenName, overDetails, isBatsmenOnStriker)).toEqual(5);
  });

  it('calcBatsmenBalls should return total balls of batsmen who is not on strike i.e. got out', () => {
    const batsmenName = 'Sachin';
    const isBatsmenOnStriker = false;
    const overDetails = [
      {
        bowler: 'Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 1, extra: '' },
          { batsman: 'Sewagh', runs: 1, extra: '' },
          { batsman: '', runs: 0, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 4, extra: '' },
        ],
      },
      {
        bowler: 'Akshay',
        ballDetails: [
          { batsman: 'Sewagh', runs: 6, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 3, extra: '' },
        ],
      }];
    expect(calcBatsmenBalls(batsmenName, overDetails, isBatsmenOnStriker)).toEqual(2);
  });

  it('calcBatsmen4sand6sBalls should return total 4s and 6s balls of ', () => {
    const batsmenName = 'Virat';
    const overDetails = [
      {
        bowler: 'Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 1, extra: '' },
          { batsman: 'Sewagh', runs: 1, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 4, extra: '' },
        ],
      },
      {
        bowler: 'Akshay',
        ballDetails: [
          { batsman: 'Sewagh', runs: 6, extra: '' },
          { batsman: 'Virat', runs: 2, extra: '' },
          { batsman: 'Virat', runs: 3, extra: '' },
        ],
      }];
    expect(calcBatsmen4sand6sBalls(batsmenName, overDetails)).toEqual({ fours: 1, sixs: 0 });
  });

  it('calcStrikeRate should return strike rate as 150 for batsmen when scored 3 runs in 2 balls', () => {
    const runs = 3;
    const balls = 2;
    expect(calcStrikeRate(runs, balls)).toEqual(150);
  });

  it('calcStrikeRate should return strike rate as 0 for batsmen when scored 0 runs in 0 balls', () => {
    const runs = 0;
    const balls = 0;
    expect(calcStrikeRate(runs, balls)).toEqual(0);
  });
  it('calcStrikeRate should return strike rate as 2.33 for batsmen when scored 7 runs in 3 balls', () => {
    const runs = 7;
    const balls = 3;
    expect(calcStrikeRate(runs, balls)).toEqual(233.33);
  });
});
