import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { missionsReducer } from '../components/missions/redux/missions';
import rocketReducer from '../components/rockets/redux/rockets';
import fetchRocketThunk from '../components/rockets/redux/rocketThunk';

const rootReducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.dispatch(fetchRocketThunk());

export default store;
