const initialState = {
  overDetails: [
    {
      bowler: '',
      ballDetails: []
    }
  ],
  showBatsmanList: false,
  striker: 'Sachin',
  nonStriker: 'Sehwag',
  // Will get from Story 2
  currentBowler: 'Shoaib',
  team1: {
    name: 'Team1',
    totalScore: 0,
    wickets: 0,
    overNumber: 0,
    ballNumber: 0,
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
  toggleBatsmanDropDown: false,
  toggleModal: false,
  toggleBowlerModal: false,
  selectedBatsman: '',
  selectedBowler: '',
  toggleBowlerDropDown: false,
  team2: {
    name: 'Team2',
    totalScore: 80,
    wickets: 5,
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
  }
};

const updateBatsmanList = (batsmanList, batsmanName) => {
  const index = batsmanList.findIndex(e => e.name === batsmanName);
  let newBatsmanList;
  if (index === 0) {
    newBatsmanList = [
      {
        name: batsmanName,
        yetToBat: false
      },
      ...batsmanList.slice(index + 1)
    ];
  } else if (index === batsmanList.length - 1) {
    newBatsmanList = [
      ...batsmanList.slice(0, index),
      {
        name: batsmanName,
        yetToBat: false
      }
    ];
  } else {
    newBatsmanList = [
      ...batsmanList.slice(0, index),
      {
        name: batsmanName,
        yetToBat: false
      },
      ...batsmanList.slice(index + 1)
    ];
  }
  return newBatsmanList;
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
          overNumber: currentOverNumber
        }
      };
    }

    case 'UPDATE_OVER_DETAILS': {
      let currentExtra = action.extra;
      if ((currentExtra === 'B' || currentExtra === 'LB') && action.runs === 0) currentExtra = '';
      if (state.team1.ballNumber === 0) {
        if (state.team1.overNumber === 0) {
          return {
            ...state,
            overDetails: [
              {
                bowler: state.currentBowler,
                ballDetails: [{ batsman: state.striker, runs: action.runs, extra: currentExtra }]
              }
            ]
          };
        }
        return {
          ...state,
          overDetails: [
            ...state.overDetails.slice(0, state.team1.currentOverNumber),
            {
              bowler: state.currentBowler,
              ballDetails: [{ batsman: state.striker, runs: action.runs, extra: currentExtra }]
            }
          ]
        };
      }
      return {
        ...state,
        overDetails: [
          ...state.overDetails.slice(0, state.team1.overNumber),
          {
            bowler: state.currentBowler,
            ballDetails: [
              ...state.overDetails[state.team1.overNumber].ballDetails,
              // Check extra field befre adding score for batsman later
              { batsman: state.striker, runs: action.runs, extra: currentExtra }
            ]
          }
        ]
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

    case 'CHANGE_BOWLER_ACTION': {
      return { ...state };
    }

    case 'SET_TEAM1_NAME': {
      return {
        ...state,
        team1: {
          ...state.team1,
          name: action.value
        }
      };
    }

    case 'SET_TEAM2_NAME': {
      return {
        ...state,
        team2: {
          ...state.team2,
          name: action.value
        }
      };
    }

    case 'TOGGLE_BATSMAN_DROPDOWN': {
      return { ...state, toggleBatsmanDropDown: !state.toggleBatsmanDropDown };
    }

    case 'TOGGLE_MODAL': {
      return { ...state, toggleModal: !state.toggleModal };
    }

    case 'TOGGLE_BOWLER_MODAL': {
      return { ...state, toggleBowlerModal: !state.toggleBowlerModal };
    }

    case 'UPDATE_WICKET': {
      return { ...state, team1: { ...state.team1, wickets: state.team1.wickets + 1 }, striker: '' };
    }

    case 'UPDATE_YET_TO_BAT': {
      return {
        ...state,
        team1: {
          ...state.team1,
          batsmanList: updateBatsmanList(state.team1.batsmanList, action.batsmanName)
        }
      };
    }

    case 'SELECT_NEXT_PLAYER': {
      return { ...state, selectedBatsman: action.name };
    }

    case 'SELECT_BOWLER': {
      return { ...state, selectedBowler: action.name };
    }

    case 'UPDATE_STRIKER_BATSMAN': {
      return { ...state, striker: state.selectedBatsman };
    }
    case 'CHANGE_CURRENT_BOWLER': {
      return {
        ...state,
        currentBowler: action.value,
        selectedBowler: '',
        toggleBowlerModal: !state.toggleBowlerModal
      };
    }

    case 'TOGGLE_BOWLER_DROPDOWN': {
      return { ...state, toggleBowlerDropDown: !state.toggleBowlerDropDown };
    }

    case 'SET_STRIKER_NON_STRIKER': {
      const batsmenList = action.value;
      const strikerName = batsmenList[0].name;
      const nonStrikerName = batsmenList[1].name;
      // { ...state, striker: strikerName};
      // { ...state, nonStriker: nonStrikerName};

      console.warn(batsmenList);
      return { ...state, striker: strikerName, nonStriker: nonStrikerName };
    }

    case 'SET_CURRENT_BLOWER': {
      const bolwersList = action.value;
      const updatedOverDetails = state.overDetails;
      updatedOverDetails.bowler = bolwersList[0].name;
      return { ...state, currentBowler: bolwersList[0].name, overDetails: updatedOverDetails };
    }
    case 'RESET_SELECTED_PLAYER_TO_BLANK': {
      return { ...state, selectedBatsman: '' };
    }

    default:
      return state;
  }
};

export default reducer;
