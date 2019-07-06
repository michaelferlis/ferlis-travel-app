

import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'



  function* fetchTrips (action) {
    try {
        const dayResponse = yield axios.get('/api/newtrip');
        yield put({type: 'SET_DAYS', payload: dayResponse.data})
    } catch(error){
        console.log('error fetching plants', error);
    }
    
  }

  function* fetchTripNames (action) {
    try {
        const dayResponse = yield axios.get('/api/name');
        yield put({type: 'SET_TRIP_NAMES', payload: dayResponse.data})
    } catch(error){
        console.log('error fetching trips', error);
    }
    
  }
  function* addTrip(action) {
    try {
      yield axios.post('/api/newtrip', action.payload);
    //   yield put({type: 'ADD_TRIP'});
    } catch (error) {
      console.log('error with posting a trip:', error);
    }
  }
  function* fetchTripDetails (action) {
    try {
        const tripResponse = yield axios.get(`/api/details/${action.payload}`);
        console.log('trip response',tripResponse.data)
        yield put({type: 'SET_SINGLE_TRIP', payload: tripResponse.data})
        
    } catch(error){
        console.log('error fetching trips', error);
    }
    
  }

  function* deleteDay (action) {
    try {
        const tripResponse = yield axios.delete(`/api/name/${action.payload}`);
        console.log('trip response',tripResponse.data)
        yield put({type: 'SET_SINGLE_TRIP', payload: tripResponse.data})
        
    } catch(error){
        console.log('error deleting day', error);
    }
    
  }



function* registrationSaga() {
    yield takeLatest('FETCH_TRIPS', fetchTrips);
    yield takeLatest('ADD_TRIP', addTrip);
    yield takeLatest('FETCH_TRIP_NAMES', fetchTripNames);
    yield takeLatest('FETCH_TRIP_DETAILS', fetchTripDetails);
    yield takeLatest('DELETE_DAY', deleteDay);
  }
  
  export default registrationSaga;