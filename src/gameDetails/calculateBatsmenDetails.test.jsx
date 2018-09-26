import { isStrikerOrNonStriker, calcBatsmenRuns } from './calculateBatsmenDetails';

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

  it('calcBatsmenRuns should return total runs of ', () => {
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

  it('calcBatsmenRuns should return total runs of ', () => {
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
});
