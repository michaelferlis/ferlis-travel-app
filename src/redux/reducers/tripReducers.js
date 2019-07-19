
import { combineReducers } from 'redux';

// Import saga middleware


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


  const singleTrip = (state = [], action) => {
    if (action.type === 'SET_SINGLE_TRIP'){
        console.log(`The trip was ${action.payload}`);
        return action.payload;
    } 

    return state;
}
const singleDay = (state = [], action) => {
    if (action.type === 'SET_SINGLE_DAY'){
        console.log(`The day was ${action.payload}`);
        return action.payload;
    } 

    return state;
}

const pinList = (state = [], action) => {
    if (action.type === 'SET_PINS'){
        console.log(`The day was ${action.payload}`);
        return action.payload;
    } 

    return state;
}

const guideList = (state = [], action) => {
    if (action.type === 'SET_GUIDES'){
        console.log(`The day was ${action.payload}`);
        return action.payload;
    } 

    return state;
}

export default combineReducers({
    addDay,
    addTripName,
    tripListAll,
    tripNames,
    singleTrip,
    singleDay,
    pinList,
    guideList,
  });
  
  