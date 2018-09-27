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

const updateStrikerBatsman = () => ({
  type: 'UPDATE_STRIKER_BATSMAN',
});

const updateWicket = () => ({
  type: 'UPDATE_WICKET',
});

const toggleBatsmanDropDownList = () => ({
  type: 'TOGGLE_BATSMAN_DROPDOWN',
});

const toggleModal = () => ({
  type: 'TOGGLE_MODAL',
});

const selectNextPlayer = name => ({
  type: 'SELECT_NEXT_PLAYER',
  name,
});

const updateYetToBat = batsmanName => ({
  type: 'UPDATE_YET_TO_BAT',
  batsmanName,
});

const updateSelectedPlayer = batsmanName =>
  (dispatch) => {
    const yetToBatAction = updateYetToBat(batsmanName);
    dispatch(yetToBatAction);

    const updateWicketAction = updateWicket();
    dispatch(updateWicketAction);

    const toggleModalObj = toggleModal();
    dispatch(toggleModalObj);
  };

export {
  updateOverDetails,
  updateScoreDetails,
  swapBatsman,
  updateOverStatus,
  updateWicket,
  selectNextPlayer,
  updateSelectedPlayer,
  toggleModal,
  updateYetToBat,
  updateStrikerBatsman,
  toggleBatsmanDropDownList,
  changeBowlerIfOverCompleted,
};
