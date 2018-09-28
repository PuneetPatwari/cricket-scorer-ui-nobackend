const updateOverDetails = (runs, extra) => ({
  type: 'UPDATE_OVER_DETAILS',
  runs,
  extra
});

const updateScoreDetails = (runs, extra) => ({
  type: 'UPDATE_SCORE_DETAILS',
  runs,
  extra
});

const swapBatsman = runs => ({
  type: 'SWAP_BATSMAN',
  runs
});

const updateOverStatus = runs => ({
  type: 'UPDATE_OVER_STATUS',
  runs
});

const changeBowlerIfOverCompleted = {
  type: 'CHANGE_BOWLER_ACTION'
};

const updateStrikerBatsman = () => ({
  type: 'UPDATE_STRIKER_BATSMAN'
});

const updateWicket = () => ({
  type: 'UPDATE_WICKET'
});

const toggleBatsmanDropDownList = () => ({
  type: 'TOGGLE_BATSMAN_DROPDOWN'
});

const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
});

const toggleBowlerModal = () => ({
  type: 'TOGGLE_BOWLER_MODAL'
});

const selectNextPlayer = name => ({
  type: 'SELECT_NEXT_PLAYER',
  name
});

const selectBowler = name => ({
  type: 'SELECT_BOWLER',
  name
});

const updateYetToBat = batsmanName => ({
  type: 'UPDATE_YET_TO_BAT',
  batsmanName
});

const setStrikerNonStrikerName = value => ({
  type: 'SET_STRIKER_NON_STRIKER',
  value
});

const setCurrentBowler = value => ({
  type: 'SET_CURRENT_BLOWER',
  value
});

const updateSelectedPlayer = batsmanName => (dispatch) => {
  const yetToBatAction = updateYetToBat(batsmanName);
  dispatch(yetToBatAction);

  const updateWicketAction = updateWicket();
  dispatch(updateWicketAction);

  const toggleModalObj = toggleModal();
  dispatch(toggleModalObj);
};

const resetSelectedPlayerToBlank = () => ({
  type: 'RESET_SELECTED_PLAYER_TO_BLANK'
});

const resetModalStatesForBatsman = () => (dispatch) => {
  const toggleModalObj = toggleModal();
  dispatch(toggleModalObj);
  const resetSelectedPlayerToBlankObj = resetSelectedPlayerToBlank();
  dispatch(resetSelectedPlayerToBlankObj);
};
const changeCurrentBowler = value => ({
  type: 'CHANGE_CURRENT_BOWLER',
  value
});

const toggleBowlerDropDownList = () => ({
  type: 'TOGGLE_BOWLER_DROPDOWN'
});

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
  setStrikerNonStrikerName,
  setCurrentBowler,
  changeBowlerIfOverCompleted,
  resetModalStatesForBatsman,
  resetSelectedPlayerToBlank,
  changeCurrentBowler,
  toggleBowlerDropDownList,
  selectBowler,
  toggleBowlerModal
};
