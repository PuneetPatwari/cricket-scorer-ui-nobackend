import reducer from './reducer';
import { updateOverDetails, swapBatsman, updateScoreDetails } from './actions';

describe('scoreBoardInformation/reducer', () => {
  it('should return initial state each team', () => {
    const initialState = {
      overDetails: [
        {
          bowler: 'Lee',
          ballDetails: [
            { batsman: 'Sachin', runs: 0, extra: '' },
            { batsman: 'Sachin', runs: 4, extra: '' },
          ],
        },
      ],
      striker: 'Sachin',
      nonStriker: 'Sehwag',
      // Will get from Story 2
      currentBowler: 'Lee',
      currentOver: ['0', '4'],
      // Team1 and Team2 will get from Story 1
      team1: {
        totalScore: 0,
        wickets: 0,
        overNumber: 0,
        ballNumber: 2,
        isInningsCompleted: false,
      },
      team2: {
        totalScore: 150,
        wickets: 7,
        isInningsCompleted: true,
      },
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Modify all relevant states on going for next ball', () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        overDetails: [
          {
            bowler: 'Lee',
            ballDetails: [
              { batsman: 'Sachin', runs: 0, extra: '' },
              { batsman: 'Sachin', runs: 4, extra: '' },
            ],
          },
        ],
        striker: 'Sachin',
        nonStriker: 'Sehwag',
        // Will get from Story 2
        currentBowler: 'Lee',
        currentOver: ['0', '4'],
        // Team1 and Team2 will get from Story 1
        team1: {
          totalScore: 4,
          wickets: 0,
          overNumber: 0,
          ballNumber: 2,
          isInningsCompleted: false,
        },
        team2: {
          totalScore: 150,
          wickets: 7,
          isInningsCompleted: true,
        },
      };
    });
    it('Add 4 runs on Over 0.3 for Sachin', () => {
      const finalBallDetails = [
        { batsman: 'Sachin', runs: 0, extra: '' },
        { batsman: 'Sachin', runs: 4, extra: '' },
        { batsman: 'Sachin', runs: 4, extra: '' },
      ];
      const tempState = reducer(initialState, updateOverDetails(4));
      expect(tempState.overDetails[0].ballDetails).toEqual(finalBallDetails);
    });
    it('swap batsman on taking 3 runs', () => {
      const finalStriker = 'Sehwag';
      const finalNonStriker = 'Sachin';
      const tempState = reducer(initialState, swapBatsman(3));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });
    it('swap batsman on taking 1 run', () => {
      const finalStriker = 'Sehwag';
      const finalNonStriker = 'Sachin';
      const tempState = reducer(initialState, swapBatsman(1));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });
    it('Do not swap batsman on taking 2 runs', () => {
      const finalStriker = 'Sachin';
      const finalNonStriker = 'Sehwag';
      const tempState = reducer(initialState, swapBatsman(2));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });

    it('Do not swap batsman on taking odd runs(1/3/5) and over change', () => {
      initialState.team1.ballNumber = 5;
      const finalStriker = 'Sachin';
      const finalNonStriker = 'Sehwag';
      initialState = reducer(initialState, updateScoreDetails(1));
      const tempState = reducer(initialState, swapBatsman(1));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });

    it('Swap batsman on taking even runs (0/2/4/6) and over change', () => {
      initialState.team1.ballNumber = 5;
      const finalStriker = 'Sehwag';
      const finalNonStriker = 'Sachin';
      initialState = reducer(initialState, updateScoreDetails(2));
      const tempState = reducer(initialState, swapBatsman(2));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });

    it('Increase score of Team1 by 6 runs', () => {
      const finalTotalScore = 10;
      const tempState = reducer(initialState, updateScoreDetails(6));
      expect(tempState.team1.totalScore).toEqual(finalTotalScore);
    });

    it('Increase ball number of Team1 on pressing next ball', () => {
      const finalBallNumber = 3;
      const tempState = reducer(initialState, updateScoreDetails(0));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
    });

    it('Set ball number to 0 and increase over number of Team1 on pressing next ball on last ball', () => {
      initialState.team1.ballNumber = 5;
      const finalBallNumber = 0;
      const finalOverNumber = 1;
      const tempState = reducer(initialState, updateScoreDetails(0));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
      expect(tempState.team1.overNumber).toEqual(finalOverNumber);
    });

    it('Add over details on the first ball of the innings (after pressing next ball for first time)', () => {
      initialState.overDetails = [];
      initialState.team1.ballNumber = 0;
      const finalOverDetails = [
        {
          bowler: 'Lee',
          ballDetails: [{ batsman: 'Sachin', runs: 0, extra: '' }],
        },
      ];
      const tempState = reducer(initialState, updateOverDetails(0));

      expect(tempState.overDetails).toEqual(finalOverDetails);
    });
  });
});
