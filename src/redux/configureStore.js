import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidReducer from './covid/covid';

const reducer = combineReducers({
  covid: covidReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
