import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

const addDay = (state = [], action) => {
    if (action.type === 'ADD_DAY'){
        console.log(`The day was ${action.payload}`);
        return [...state, action.payload];
    } 

    return state;
}

const addTripName = (state = [], action) => {
    if (action.type === 'ADD_TRIP_NAME'){
        console.log(`The day was ${action.payload}`);
        return [...state, action.payload];
    } 

    return state;
}

const tripNames = (state = [], action) => {
  if (action.type === 'SET_TRIP_NAMES'){
      console.log(`The day was ${action.payload}`);
      return action.payload;
  } 

  return state;
}

const tripListAll = (state = [], action) => {
  if (action.type === 'SET_DAYS'){
      console.log(`The day was ${action.payload}`);
      return action.payload;
  } 

  return state;
}

// const oneTrip = (state = {}, action) => {
//   switch (action.type) {
//     case 'SET_ONE_TRIP':
//       return action.payload 
//     default:
//       return state;
//   }
// }; 


// const dayList = (state = [], action) => {
//     switch (action.type) {
//       case 'SET_DAYS':
//         return action.payload
//       default:
//         return state;
//     }
//   };


export default combineReducers({
    addDay,
    addTripName,
    tripListAll,
    // oneTrip,
    tripNames,
  });
  
  