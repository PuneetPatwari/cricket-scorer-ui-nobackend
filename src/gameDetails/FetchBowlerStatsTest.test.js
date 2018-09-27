import fetchBowlerStats from './FetchBowlerStats';

describe('test cases of fetchBowlerStats function', () => {
  it('should return overs count as 0 if the bowler did not bowled any over', () => {
    const overDetails = [
      {
        bowler: 'Shoaib',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 2, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 6, extra: '' },
          { batsman: 'Sachin', runs: 6, extra: '' },
        ],
      },
      {
        bowler: 'Brett Lee',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
        ],
      }];
    const totalOversBowled = fetchBowlerStats('Wasim', overDetails).totalOversBowled;
    expect(totalOversBowled).toEqual(0);
  });
  it('should return overs count bowled by the bowler as 2', () => {
    const overDetails = [
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 2, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 6, extra: '' },
          { batsman: 'Sachin', runs: 6, extra: '' },
        ],
      },
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
        ],
      }];
    const totalOversBowled = fetchBowlerStats('Wasim', overDetails).totalOversBowled;
    expect(totalOversBowled).toEqual(2);
  });

  it('should return no of maiden overs as 0 if no maiden overs were bowled', () => {
    const overDetails = [
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 2, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 6, extra: '' },
          { batsman: 'Sachin', runs: 6, extra: '' },
        ],
      },
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 2, extra: '' },
          { batsman: 'Sehwag', runs: 4, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 6, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
        ],
      }];
    const totalMaidenOversBowled = fetchBowlerStats('Wasim', overDetails).totalMaidenOvers;
    expect(totalMaidenOversBowled).toEqual(0);
  });

  it('should return no of maiden overs as 1 if 1 maiden over was bowled', () => {
    const overDetails = [
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 2, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sehwag', runs: 6, extra: '' },
          { batsman: 'Sachin', runs: 6, extra: '' },
        ],
      },
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sehwag', runs: 0, extra: '' },
        ],
      }];
    const totalMaidenOversBowled = fetchBowlerStats('Wasim', overDetails).totalMaidenOvers;
    expect(totalMaidenOversBowled).toEqual(1);
  });

  it('should return 2 extra runs if no ball and wide is bowled in that over', () => {
    const overDetails = [
      {
        bowler: 'Wasim',
        ballDetails: [
          { batsman: 'Sachin', runs: 0, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: 'N' },
          { batsman: 'Sehwag', runs: 2, extra: '' },
          { batsman: 'Sachin', runs: 4, extra: '' },
          { batsman: 'Sachin', runs: 0, extra: 'W' },
          { batsman: 'Sehwag', runs: 6, extra: '' },
          { batsman: 'Sachin', runs: 6, extra: '' },
        ],
      }];
    const totalRunsConceded = fetchBowlerStats('Wasim', overDetails).totalRunsConceded;
    expect(totalRunsConceded).toEqual(24);
  });
});