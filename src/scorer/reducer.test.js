import reducer from './reducer';
import {updateOverDetails} from './actions';

describe('scoreBoardInformation/reducer', () => {
  it('should return initial state each team', () => {
    const initialState = {
      overDetails: [{
        bowler: 'Lee',
        ballDetails: [{ batsman: 'Sachin', runs: 0, extra: '' }, { batsman: 'Sachin', runs: 4, extra: '' }],
      }],
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
      }
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Modify all relevant states on going for next ball', () => {
    let initialState;
    beforeEach(() => {
      initialState = {
        overDetails: [{
          bowler: 'Lee',
          ballDetails: [{ batsman: 'Sachin', runs: 0, extra: '' }, { batsman: 'Sachin', runs: 4, extra: '' }],
        }],
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
        }
      };
    })
    it('Add 4 runs on Over 0.3 for Sachin', () => { 
      const finalBallDetails =  [{ batsman: 'Sachin', runs: 0, extra: '' }, { batsman: 'Sachin', runs: 4, extra: '' },
      { batsman: 'Sachin', runs: 4, extra: '' }];
      const tempState = reducer(initialState, updateOverDetails(4));
      expect(tempState.overDetails[0].ballDetails).toEqual(finalBallDetails);
    });
    
  });
});


