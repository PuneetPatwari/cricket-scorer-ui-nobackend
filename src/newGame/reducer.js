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
    'Player1.11',
  ],
  team2Players: [
    'Player2.1',
    'Player2.2',
    'Player2.3',
    'Player2.4',
    'Player2.5',
    'Player2.6',
    'Player2.7',
    'Player2.8',
    'Player2.9',
    'Player2.10',
    'Player2.11',
  ],
  numberOfOvers: 5,
  currentOverDetails: ['1', '2', 'Wd', '0', '4'],
  currentBowler: 'Player2.1',
};

const reducer = (state = initialState) => state;

export default reducer;
