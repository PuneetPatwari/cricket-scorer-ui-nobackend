import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreBoardReducer from '../scorer/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  scoreBoardInformation: scoreBoardReducer,
});

export default rootReducer;
