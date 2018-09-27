import reducer from './reducer';
import {
  updateOverDetails,
  swapBatsman,
  updateScoreDetails,
  updateWicket,
  updateYetToBat,
  setStrikerNonStrikerName,
  setCurrentBowler,
  selectNextPlayer,
  updateStrikerBatsman,
  resetSelectedPlayerToBlank,
  changeCurrentBowler
} from './actions';
import { setTeam1Name, setTeam2Name } from '../newGame/actions';

describe('scoreBoardInformation/reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      overDetails: [
        {
          bowler: 'Lee',
          ballDetails: [
            { batsman: 'Sachin', runs: 0, extra: '' },
            { batsman: 'Sachin', runs: 4, extra: '' }
          ]
        }
      ],
      striker: 'Sachin',
      nonStriker: 'Sehwag',
      // Will get from Story 2
      currentBowler: 'Lee',
      // Team1 and Team2 will get from Story 1
      team1: {
        name: 'Team1',
        totalScore: 4,
        wickets: 0,
        overNumber: 0,
        ballNumber: 2,
        isInningsCompleted: false,
        batsmanList: [
          {
            name: 'Sachin',
            yetToBat: false
          },
          {
            name: 'Sehwag',
            yetToBat: false
          },
          {
            name: 'Virat',
            yetToBat: true
          },
          {
            name: 'Rohit',
            yetToBat: true
          },
          {
            name: 'Rahul',
            yetToBat: true
          },
          {
            name: 'Ramesh',
            yetToBat: true
          },
          {
            name: 'Kapil',
            yetToBat: true
          },
          {
            name: 'MS Dhoni',
            yetToBat: true
          },
          {
            name: 'Yuvraj',
            yetToBat: true
          },
          {
            name: 'Irfan',
            yetToBat: true
          },
          {
            name: 'Zaheer',
            yetToBat: true
          }
        ]
      },
      team2: {
        name: 'Team2',
        totalScore: 150,
        wickets: 7,
        isInningsCompleted: true,
        bowlerList: [
          {
            name: 'Shoaib'
          },
          {
            name: 'Bret'
          },
          {
            name: 'Shane'
          },
          {
            name: 'Iqbal'
          },
          {
            name: 'Harbhajan'
          },
          {
            name: 'B Kumar'
          },
          {
            name: 'Sohail'
          },
          {
            name: 'Abdul'
          },
          {
            name: 'Razak'
          },
          {
            name: 'Megrath'
          },
          {
            name: 'Murlidharan'
          }
        ]
      },
      toggleBatsmanDropDown: false,
      showBatsmanList: false,
      toggleModal: false,
      selectedBatsman: ''
    };
  });

  describe('Modify all relevant states on going for next ball', () => {
    it('should return initial state each team', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('Add 4 runs on Over 0.3 for Sachin', () => {
      const finalBallDetails = [
        { batsman: 'Sachin', runs: 0, extra: '' },
        { batsman: 'Sachin', runs: 4, extra: '' },
        { batsman: 'Sachin', runs: 4, extra: '' }
      ];
      const tempState = reducer(initialState, updateOverDetails(4, ''));
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
      initialState = reducer(initialState, updateScoreDetails(1, ''));
      const tempState = reducer(initialState, swapBatsman(1));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });

    it('Swap batsman on taking even runs (0/2/4/6) and over change', () => {
      initialState.team1.ballNumber = 5;
      const finalStriker = 'Sehwag';
      const finalNonStriker = 'Sachin';
      initialState = reducer(initialState, updateScoreDetails(2, ''));
      const tempState = reducer(initialState, swapBatsman(2));
      expect(tempState.striker).toEqual(finalStriker);
      expect(tempState.nonStriker).toEqual(finalNonStriker);
    });

    it('Increase score of Team1 by 6 runs', () => {
      const finalTotalScore = 10;
      const tempState = reducer(initialState, updateScoreDetails(6, ''));
      expect(tempState.team1.totalScore).toEqual(finalTotalScore);
    });

    it('Increase ball number of Team1 on pressing next ball', () => {
      const finalBallNumber = 3;
      const tempState = reducer(initialState, updateScoreDetails(0, ''));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
    });

    it('Set ball number to 0 and increase over number of Team1 on pressing next ball on last ball', () => {
      initialState.team1.ballNumber = 5;
      const finalBallNumber = 0;
      const finalOverNumber = 1;
      const tempState = reducer(initialState, updateScoreDetails(0, ''));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
      expect(tempState.team1.overNumber).toEqual(finalOverNumber);
    });

    it('Add over details on the first ball of the innings (after pressing next ball for first time)', () => {
      initialState.overDetails = [];
      initialState.team1.ballNumber = 0;
      const finalOverDetails = [
        {
          bowler: 'Lee',
          ballDetails: [{ batsman: 'Sachin', runs: 0, extra: '' }]
        }
      ];
      const tempState = reducer(initialState, updateOverDetails(0, ''));

      expect(tempState.overDetails).toEqual(finalOverDetails);
    });

    it('Add wide for current bowler on clicking next ball', () => {
      const finalOverDetails = [
        {
          bowler: 'Lee',
          ballDetails: [
            { batsman: 'Sachin', runs: 0, extra: '' },
            { batsman: 'Sachin', runs: 4, extra: '' },
            { batsman: 'Sachin', runs: 0, extra: 'W' }
          ]
        }
      ];
      const tempState = reducer(initialState, updateOverDetails(0, 'W'));
      expect(tempState.overDetails).toEqual(finalOverDetails);
    });

    it('Add (4 + wide) 5 runs to team score which gives final score as 9', () => {
      const finalTeam1Score = 9;
      const tempState = reducer(initialState, updateScoreDetails(4, 'W'));
      expect(tempState.team1.totalScore).toEqual(finalTeam1Score);
    });

    it('Add (2 + Noball) 3 runs to team score which gives final score as 7', () => {
      const finalTeam1Score = 7;
      const tempState = reducer(initialState, updateScoreDetails(2, 'N'));
      expect(tempState.team1.totalScore).toEqual(finalTeam1Score);
    });

    it('Add (4 + Bye) 4 runs to team score which gives final score as 8', () => {
      const finalTeam1Score = 8;
      const tempState = reducer(initialState, updateScoreDetails(4, 'B'));
      expect(tempState.team1.totalScore).toEqual(finalTeam1Score);
    });

    it('Add (2 + LB) 5 runs to team score which gives final score as 6', () => {
      const finalTeam1Score = 6;
      const tempState = reducer(initialState, updateScoreDetails(2, 'LB'));
      expect(tempState.team1.totalScore).toEqual(finalTeam1Score);
    });

    it('Do not change ball number on conceding a Wide', () => {
      const finalBallNumber = 2;
      const tempState = reducer(initialState, updateScoreDetails(0, 'W'));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
    });

    it('Do not change ball number on conceding a No ball', () => {
      const finalBallNumber = 2;
      const tempState = reducer(initialState, updateScoreDetails(0, 'N'));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
    });

    it('Change ball number on conceding a Bye', () => {
      const finalBallNumber = 3;
      const tempState = reducer(initialState, updateScoreDetails(0, 'B'));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
    });

    it('Change ball number on conceding a Leg-Bye', () => {
      const finalBallNumber = 3;
      const tempState = reducer(initialState, updateScoreDetails(0, 'LB'));
      expect(tempState.team1.ballNumber).toEqual(finalBallNumber);
    });
  });
  describe('Select next bowler and update states', () => {
    it('Change current bowler to Starc', () => {
      const tempState = reducer(initialState, changeCurrentBowler('Starc'));
      expect(tempState.currentBowler).toEqual('Starc');
    });
  });

  describe('Get Match details like team-names/overs and update states', () => {
    it('Set Team1 name to India', () => {
      const tempState = reducer(initialState, setTeam1Name('India'));
      expect(tempState.team1.name).toEqual('India');
    });

    it('Set Team2 name to Australia', () => {
      const tempState = reducer(initialState, setTeam2Name('Australia'));
      expect(tempState.team2.name).toEqual('Australia');
    });
  });
});

describe('Modify state when player is out', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      overDetails: [
        {
          bowler: 'Lee',
          ballDetails: [
            { batsman: 'Sachin', runs: 0, extra: '' },
            { batsman: 'Sachin', runs: 4, extra: '' }
          ]
        }
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
        batsmanList: [
          {
            name: 'Sachin',
            yetToBat: false
          },
          {
            name: 'Sehwag',
            yetToBat: false
          },
          {
            name: 'Player 3',
            yetToBat: true
          },
          {
            name: 'Player 4',
            yetToBat: true
          },
          {
            name: 'Player 5',
            yetToBat: true
          },
          {
            name: 'Player 6',
            yetToBat: true
          },
          {
            name: 'Player 7',
            yetToBat: true
          },
          {
            name: 'Player 8',
            yetToBat: true
          },
          {
            name: 'Player 9',
            yetToBat: true
          },
          {
            name: 'Player 10',
            yetToBat: true
          },
          {
            name: 'Player 11',
            yetToBat: true
          }
        ]
      },
      toggleBatsmanDropDown: false,
      toggleModal: false,
      selectedBatsman: 'Sachin',
      team2: {
        totalScore: 150,
        wickets: 7,
        isInningsCompleted: true
      }
    };
  });
  it('Update wicket', () => {
    const finalWicketState = 1;
    const updateWicketAction = updateWicket();
    const tempState = reducer(initialState, updateWicketAction);
    expect(tempState.team1.wickets).toEqual(finalWicketState);
  });
  it('Update wicket and reset striker', () => {
    const finalWicketState = 1;
    const updateWicketAction = updateWicket();
    const tempState = reducer(initialState, updateWicketAction);
    expect(tempState.team1.wickets).toEqual(finalWicketState);
    expect(tempState.striker).toEqual('');
  });
  it('Update yet to bat property for player', () => {
    const finalBatsmanState = {
      name: 'Player 3',
      yetToBat: false
    };
    const updateYetToBatAction = updateYetToBat('Player 3');
    const tempState = reducer(initialState, updateYetToBatAction);
    expect(tempState.team1.batsmanList[2]).toEqual(finalBatsmanState);
  });
  it('Update yet to bat property for last player', () => {
    const finalBatsmanState = {
      name: 'Player 11',
      yetToBat: false
    };
    const updateYetToBatAction = updateYetToBat('Player 11');
    const tempState = reducer(initialState, updateYetToBatAction);
    expect(tempState.team1.batsmanList[10]).toEqual(finalBatsmanState);
  });

  it('Set striker & non striker', () => {
    const batsmanList = [
      {
        name: 'Rohan',
        yetToBat: false
      },
      {
        name: 'Rahul',
        yetToBat: false
      }
    ];
    const tempState = reducer(initialState, setStrikerNonStrikerName(batsmanList));
    expect(tempState.striker).toEqual('Rohan');
    expect(tempState.nonStriker).toEqual('Rahul');
  });
  it('Set current bolwer', () => {
    const bowlerList = [
      {
        name: 'Puneet'
      },
      {
        name: 'Ram'
      }
    ];
    const tempState = reducer(initialState, setCurrentBowler(bowlerList));
    expect(tempState.currentBowler).toEqual('Puneet');
  });
  it('Update selected player when player is selcted from dropdown', () => {
    const selectNextPlayerAction = selectNextPlayer('Player 3');
    const tempState = reducer(initialState, selectNextPlayerAction);
    expect(tempState.selectedBatsman).toEqual('Player 3');
  });
  it('Update striker player to selected player', () => {
    const selectNextPlayerAction = selectNextPlayer('Player 3');
    // updating state to update selectedPlayer state first
    const tempState1 = reducer(initialState, selectNextPlayerAction);
    const updateStrikerBatsmanAction = updateStrikerBatsman();
    const tempState = reducer(tempState1, updateStrikerBatsmanAction);
    expect(tempState.striker).toEqual('Player 3');
  });
  it('check selected player state is getting blank', () => {
    const selectNextPlayerAction = selectNextPlayer('Player 3');
    // updating state to update selectedPlayer state first
    const tempState1 = reducer(initialState, selectNextPlayerAction);
    expect(tempState1.selectedBatsman).toEqual('Player 3');
    const resetSelectedPlayerToBlankAction = resetSelectedPlayerToBlank();
    const tempState = reducer(tempState1, resetSelectedPlayerToBlankAction);
    expect(tempState.selectedBatsman).toEqual('');
  });
});
