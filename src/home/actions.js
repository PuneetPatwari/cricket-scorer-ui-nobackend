import history from '../routes/history';
import { Routes } from '../routes/routes';

export const CREATE_GAME = 'CREATE_GAME';
export const SHOW_BATSMAN_LIST = 'SHOW_BATSMAN_LIST';
export const SET_TEAM1_NAME = 'SET_TEAM1_NAME';
export const SET_TEAM2_NAME = 'SET_TEAM2_NAME';
export const SET_NUMBER_OF_OVERS = 'SET_NUMBER_OF_OVERS';


export const createGameAction = () => (dispatch) => {
  dispatch({ type: CREATE_GAME });
  history.push(Routes.NEW_GAME);
};

export const showBatsManListAction = () => ({ type: SHOW_BATSMAN_LIST });

export const setTeam1Name = () => ({ type: SET_TEAM1_NAME });

export const setTeam2Name = () => ({ type: SET_TEAM1_NAME });

export const setNumberOfOvers = () => ({ type: SET_NUMBER_OF_OVERS });
