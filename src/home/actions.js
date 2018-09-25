import history from '../routes/history';
import { Routes } from '../routes/routes';

export const CREATE_GAME = 'CREATE_GAME';
export const GAME_DETAILS = 'GAME_DETAILS';
export const SCORER = 'SCORER';


export const createGameAction = () => (dispatch) => {
  dispatch({ type: CREATE_GAME });
  history.push(Routes.NEW_GAME);
};

export const goToGameDetails = () => (dispatch) => {
  dispatch({ type: GAME_DETAILS });
  history.push(Routes.GAME_DETAILS);
};

export const goToScorerPage = () => (dispatch) => {
  dispatch({ type: SCORER });
  history.push(Routes.SCORER);
};
