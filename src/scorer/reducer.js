const initialState = {
  team1: {

    totalScore: 0,
    wickets: 0,
    overNumber: 0,
    ballNumber: 0,
    isInningsCompleted: false,
  },
  team2: {

    totalScore: 150,
    wickets: 7,
    isInningsCompleted: true,
  },
};

const reducer = (state = initialState) => state;

export default reducer;
