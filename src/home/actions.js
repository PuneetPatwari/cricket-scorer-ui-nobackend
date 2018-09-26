import history from '../routes/history';
import { Routes } from '../routes/routes';

export const CREATE_GAME = 'CREATE_GAME';
export const SHOW_BATSMAN_LIST = 'SHOW_BATSMAN_LIST';


export const createGameAction = () => (dispatch) => {
  dispatch({ type: CREATE_GAME });
  history.push(Routes.NEW_GAME);
};

export const showBatsManListAction = () => ({ type: SHOW_BATSMAN_LIST });
