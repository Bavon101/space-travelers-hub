import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { missionsReducer } from '../components/missions/redux/missions';

const rootReducer = combineReducers({
  missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
