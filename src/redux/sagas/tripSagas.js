

import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'


function* fetchGuides (action) {
  try {
      const dayResponse = yield axios.get('/api/guides');
      yield put({type: 'SET_GUIDES', payload: dayResponse.data})
      console.log(dayResponse.data);
      
  } catch(error){
      console.log('error fetching guides', error);
  }
  
}

  function* fetchTrips (action) {
    try {
        const dayResponse = yield axios.get('/api/newtrip');
        yield put({type: 'SET_DAYS', payload: dayResponse.data})
        console.log(dayResponse.data);
        
    } catch(error){
        console.log('error fetching days', error);
    }
    
  }

  function* fetchTripNames (action) {
    try {
        const dayResponse = yield axios.get('/api/name');
        yield put({type: 'SET_TRIP_NAMES', payload: dayResponse.data})
        console.log(dayResponse.data);
    } catch(error){
        console.log('error fetching trips', error);
    }
    
    
  }

  function* fetchPins (action) {
    try {
        const pinResponse = yield axios.get('/api/pins');
        yield put({type: 'SET_PINS', payload: pinResponse.data})
        console.log(pinResponse.data);
    } catch(error){
        console.log('error fetching trips', error);
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

  function* fetchDayDetails (action) {
    try {
        const tripResponse = yield axios.get(`/api/daydetails/${action.payload}`);
        console.log('trip response',tripResponse.data)
        yield put({type: 'SET_SINGLE_DAY', payload: tripResponse.data})
        
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

  function* addGuide(action) {
    try{
      yield axios.post('/api/guides', action.payload)
    } catch (error) {
      console.log('error with posting a guide', error);
      
    }

  }

  function* addDay(action) {
    try {
      yield axios.post('/api/name', action.payload);
    console.log(action.payload);
    
    } catch (error) {
      console.log('error with posting a trip:', error);
    }
  }

  function* addPin(action) {
    try {
      yield axios.post('/api/pins', action.payload);
    console.log(action.payload);
    
    } catch (error) {
      console.log('error with posting a trip:', error);
    }
  }
  


  function* deleteDay (action) {
    try {
        const tripResponse = yield axios.delete(`/api/newtrip/${action.payload}`);
        console.log('trip response',tripResponse.data)
        yield put({type: 'FETCH_TRIPS', payload: tripResponse.data})
        
    } catch(error){
        console.log('error deleting day', error);
    }
    
  }

  function* fetchSingleGuide (action) {
    try {
      const guideResponse = yield axios.get(`/api/city/${action.payload}`);
      console.log('guide response',guideResponse.data)
      yield put({type: 'SET_SINGLE_GUIDE', payload: guideResponse.data})
      
  } catch(error){
      console.log('error deleting day', error);
  }
  }

  function* updateDay (action) {
    try {
        const tripResponse = yield axios.put(`/api/newtrip/${action.payload.id}`, action.payload);
        console.log('saga', action.payload);
        
        console.log('trip response',tripResponse.data)
        yield put({type: 'GET_DETAILS', payload: tripResponse.data})
        
    } catch(error){
        console.log('error updating day', error);
    }
    
  }
  
  function* updateTrip (action) {
    try {
        const tripResponse = yield axios.put(`/api/details/${action.payload.id}`, action.payload);
        console.log('saga', action.payload);
        
        console.log('trip response',tripResponse.data)
        // yield put({type: 'FETCH_TRIPS', payload: tripResponse.data})
        
    } catch(error){
        console.log('error updating day', error);
    }
    
  }

  function* markComplete(action) {
    try {
      const tripResponse = yield axios.put(`/api/name/${action.payload}`, action.payload);
      console.log('trip response', tripResponse.data);
      
    } catch(error){
    console.log('error marking trip', error);
    }
  }

//   function* updateDay(action) {
//     yield axios.put(`api/newtrip/${action.payload}`)
//     console.log(action.payload);
    
    
// }



function* registrationSaga() {
    yield takeLatest('FETCH_TRIPS', fetchTrips);
    yield takeLatest('ADD_TRIP', addTrip);
    yield takeLatest('FETCH_TRIP_NAMES', fetchTripNames);
    yield takeLatest('FETCH_TRIP_DETAILS', fetchTripDetails);
    yield takeLatest('DELETE_DAY', deleteDay);
    yield takeLatest('FETCH_DAY_DETAILS', fetchDayDetails);
    yield takeLatest('UPDATE_DAY', updateDay);
    yield takeLatest('UPDATE_TRIP', updateTrip);
    yield takeLatest('ADD_SINGLE_DAY', addDay);
    yield takeLatest('MARK_COMPLETE', markComplete);
    yield takeLatest('FETCH_PINS', fetchPins);
    yield takeLatest('ADD_PIN', addPin);
    yield takeLatest('ADD_GUIDE', addGuide);
    yield takeLatest('FETCH_GUIDES', fetchGuides);
    yield takeLatest('FETCH_GUIDE_DETAILS', fetchSingleGuide);
  }
  
  export default registrationSaga;