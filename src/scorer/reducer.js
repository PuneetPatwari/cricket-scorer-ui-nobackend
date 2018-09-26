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
    name: 'Team1',
    totalScore: 4,
    wickets: 0,
    overNumber: 0,
    ballNumber: 2,
    isInningsCompleted: false,
    batsmanList: [
      {
        name: 'Sachin',
        yetToBat: false,
      },
      {
        name: 'Sehwag',
        yetToBat: false,
      },
      {
        name: 'Player 3',
        yetToBat: true,
      },
      {
        name: 'Player 4',
        yetToBat: false,
      },
      {
        name: 'Player 5',
        yetToBat: true,
      },
      {
        name: 'Player 6',
        yetToBat: true,
      },
      {
        name: 'Player 7',
        yetToBat: true,
      },
      {
        name: 'Player 8',
        yetToBat: true,
      },
      {
        name: 'Player 9',
        yetToBat: true,
      },
      {
        name: 'Player 10',
        yetToBat: true,
      },
      {
        name: 'Player 11',
        yetToBat: true,
      },
    ],
  },
  toggleBatsmanDropDown: false,
  showBatsmanList: false,
  team2: {
    name: 'Team2',
    totalScore: 150,
    wickets: 7,
    isInningsCompleted: true,
  },
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SCORE_DETAILS': {
      let extraRun = 0;
      let currentBallNumber = state.team1.ballNumber;
      if (action.extra === 'W' || action.extra === 'N') {
        extraRun = 1;
      } else {
        currentBallNumber += 1;
      }

      let currentOverNumber = state.team1.overNumber;
      if (currentBallNumber === 6) {
        currentBallNumber = 0;
        currentOverNumber += 1;
      }
      return {
        ...state,
        team1: {
          ...state.team1,
          totalScore: state.team1.totalScore + action.runs + extraRun,
          ballNumber: currentBallNumber,
          overNumber: currentOverNumber,
        },
      };
    }

    case 'UPDATE_OVER_DETAILS': {
      let currentExtra = action.extra;
      if ((currentExtra === 'B' || currentExtra === 'LB') && action.runs === 0) currentExtra = '';
      if (state.team1.ballNumber === 0) {
        return {
          ...state,
          overDetails: [
            ...state.overDetails,
            {
              bowler: state.currentBowler,
              ballDetails: [{ batsman: state.striker, runs: action.runs, extra: currentExtra }],
            },
          ],
        };
      }
      return {
        ...state,
        overDetails: [
          ...state.overDetails.slice(0, state.team1.overNumber),
          {
            ...state.overDetails[state.team1.overNumber],
            ballDetails: [
              ...state.overDetails[state.team1.overNumber].ballDetails,
              // Check extra field befre adding score for batsman later
              { batsman: state.striker, runs: action.runs, extra: currentExtra },
            ],
          },
        ],
      };
    }

    case 'SWAP_BATSMAN': {
      let s = state.striker;
      let ns = state.nonStriker;
      /* The if condition handles the logic for swapping of batsman */
      if (
        (action.runs % 2 === 1 && state.team1.ballNumber !== 0) ||
        (action.runs % 2 !== 1 && state.team1.ballNumber === 0)
      ) {
        [s, ns] = [ns, s];
      }
      return { ...state, striker: s, nonStriker: ns };
    }

    case 'SET_TEAM1_NAME': {
      console.log(state);
      return {
        ...state,
        team1: {
          ...state.team1,
          name: action.value,
        },
      };
    }

    case 'SET_TEAM2_NAME': {
      console.log(state);
      return {
        ...state,
        team2: {
          ...state.team2,
          name: action.value,
        },
      };
    }

    default:
      return initialState;
  }
};

export default reducer;
