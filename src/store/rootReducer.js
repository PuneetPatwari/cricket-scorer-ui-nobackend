import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import ballScoreReducer from '../scorer/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  ballScore: ballScoreReducer,
});

export default rootReducer;
