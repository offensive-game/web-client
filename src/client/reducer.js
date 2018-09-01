import { combineReducers } from 'redux';

const dummyReducer = () => ({
  noData: 'noData'
});

const rootReducer = combineReducers({
  dummy: dummyReducer
});

export default rootReducer;
