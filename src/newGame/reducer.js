const initialState = {
  team1Players: [
    'Player1.1',
    'Player1.2',
    'Player1.3',
    'Player1.4',
    'Player1.5',
    'Player1.6',
    'Player1.7',
    'Player1.8',
    'Player1.9',
    'Player1.10',
    'Player1.11'
  ],
  team2Players: [
    'Lee',
    'Player2.2',
    'Player2.3',
    'Player2.4',
    'Player2.5',
    'Player2.6',
    'Player2.7',
    'Player2.8',
    'Player2.9',
    'Player2.10',
    'Player2.11'
  ],
  numberOfOvers: 3
  // currentOverDetails: ['1', '2', 'Wd', '0', '4'],
  // currentBowler: 'Player2.1',
};

// const reducer = (state = initialState) => state;
const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_NUMBER_OF_OVERS': {
      return { ...state, numberOfOvers: action.value };
    }
    // case 'SET_TEAM1_NAME': {
    //   return { ...state, team1: { ...state.team1, name: action.value } };
    // }
    // case 'SET_TEAM2_NAME': {
    //   return { ...state, team1: { ...state.team2, name: action.value } };
    // }
    case 'SET_BATMENSLIST': {
      const batmsens = action.value.map(p => p.name);
      return { ...state, team1Players: batmsens };
    }
    case 'SET_BOWLLERSLIST': {
      const ballers = action.value.map(p => p.name);
      return { ...state, team2Players: ballers };
    }
    default:
      return state;
  }
};

export default reducer;
