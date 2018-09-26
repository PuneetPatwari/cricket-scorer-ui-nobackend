const updateOverDetails = (runs, extra) => ({
  type: 'UPDATE_OVER_DETAILS',
  runs,
  extra,
});

const updateScoreDetails = (runs, extra) => ({
  type: 'UPDATE_SCORE_DETAILS',
  runs,
  extra,
});

const swapBatsman = runs => ({
  type: 'SWAP_BATSMAN',
  runs,
});

const updateOverStatus = runs => ({
  type: 'UPDATE_OVER_STATUS',
  runs,
});

const changeBowlerIfOverCompleted = {
  type: 'CHANGE_BOWLER_ACTION',
};


export { updateOverDetails, updateScoreDetails, swapBatsman, updateOverStatus, changeBowlerIfOverCompleted };
