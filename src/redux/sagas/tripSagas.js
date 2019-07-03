
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'



  function* fetchDays (action) {
    try {
        const dayResponse = yield axios.get('/api/newday');
        yield put({type: 'SET_DAYS', payload: dayResponse.data})
    } catch(error){
        console.log('error fetching plants', error);
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


function* registrationSaga() {
    yield takeLatest('FETCH_DAYS', fetchDays);
    yield takeLatest('ADD_TRIP', addTrip);
  }
  
  export default registrationSaga;