import { combineReducers } from 'redux';
import gameInformationReducer from '../newGame/reducer';
import scoreBoardInformation from '../scorer/reducer';

const rootReducer = combineReducers({
  gameInformation: gameInformationReducer,
  scoreBoardInformation,
});

export default rootReducer;
