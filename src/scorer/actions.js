const updateOverDetails = runs => ({
  type: 'UPDATE_OVER_DETAILS',
  runs,
});

const updateScoreDetails = runs => ({
  type: 'UPDATE_SCORE_DETAILS',
  runs,
});

const swapBatsman = runs => ({
  type: 'SWAP_BATSMAN',
  runs,
});

const updateOverStatus = runs => ({
  type: 'UPDATE_OVER_STATUS',
  runs,
});

export { updateOverDetails, updateScoreDetails, swapBatsman, updateOverStatus };
